import { parseISO, isBefore } from 'date-fns';
import { Op } from 'sequelize';
import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';
import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  /**
   *
   * @api {get} /subscriptions Get all subscriptions
   * @apiName Get all Subscriptions
   * @apiGroup Subscriptions
   *
   * @apiSuccess {Array} Return collection of Meetups that user is subscribed.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *
   * [
   *    {
   *      "id": 10,
   *      "createdAt": "2019-08-09T22:40:14.966Z",
   *      "updatedAt": "2019-08-09T22:40:14.966Z",
   *      "meetup_id": 5,
   *      "user_id": 1,
   *      "Meetup": {
   *        "id": 5,
   *        "title": "tsete",
   *        "description": "some description",
   *        "location": "street xtop number 000",
   *        "date": "2019-08-14T11:00:00.000Z",
   *        "banner_id": 1,
   *        "user_id": 6,
   *        "createdAt": "2019-08-09T22:38:48.601Z",
   *        "updatedAt": "2019-08-09T22:38:48.601Z"
   *      }
   *    },
   *    {
   *      "id": 9,
   *      "createdAt": "2019-08-06T23:25:17.448Z",
   *      "updatedAt": "2019-08-06T23:25:17.448Z",
   *      "meetup_id": 1,
   *      "user_id": 1,
   *      "Meetup": {
   *        "id": 1,
   *        "title": "tsete teste teste",
   *        "description": "some description zzzzz",
   *        "location": "street xtop number 111000222",
   *        "date": "2019-08-15T11:00:00.000Z",
   *        "banner_id": 1,
   *        "user_id": 6,
   *        "createdAt": "2019-08-05T08:32:52.094Z",
   *        "updatedAt": "2019-08-05T21:54:42.728Z"
   *      }
   *    }
   *  ]
   *
   *
   *
   */
  async index(req, res) {
    const subscription = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'meetup_id', 'user_id'],
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          attributes: ['id', 'title', 'description', 'location', 'date'],
          required: true,
          include: [
            {
              model: File,
              as: 'banner',
              attributes: ['id', 'url', 'name'],
            },
            {
              model: User,
              as: 'user',
              attributes: ['id', 'name', 'email'],
            },
          ],
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

  async delete(req, res) {
    const subscription = await Subscription.findByPk(req.params.id);

    if (subscription.user_id !== req.userId) {
      return res.status(401).json({
        error: 'You cannot delete a meetup that was not created by you.',
      });
    }

    const data = await subscription.destroy();
    return res.json(data);
  }
}

export default new SubscriptionController();
