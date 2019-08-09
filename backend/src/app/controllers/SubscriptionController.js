import { parseISO, isBefore } from 'date-fns';
import { Op } from 'sequelize';
import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscription = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[Meetup, 'date']],
    });

    res.json(subscription);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.findByPk(req.params.id, {
      include: [{ model: User, as: 'user' }],
    });

    if (meetup.user_id === user.id) {
      return res
        .status(400)
        .json({ error: 'You cannot subscribe in a meetup managed by you.' });
    }

    if (isBefore(parseISO(meetup.date), new Date())) {
      return res
        .status(400)
        .json({ error: 'You cannot subscribe in meetup that has passed.' });
    }

    const isSubscribed = await Subscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (isSubscribed) {
      return res
        .status(400)
        .json({ error: 'You cannot subscribe in meetup twice.' });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: meetup.id,
    });

    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
