import { parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';
import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

class SubscriptionController {
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

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Nova inscrição feita pelo Meetup',
      template: 'subscription',
      context: {
        manager: meetup.user.name,
        title: meetup.title,
        location: meetup.location,
        date: format(meetup.date, " dd 'de' MMMM'", {
          locale: pt,
        }),
        user: user.name,
        email: user.email,
      },
    });
    return res.json(subscription);
  }
}

export default new SubscriptionController();
