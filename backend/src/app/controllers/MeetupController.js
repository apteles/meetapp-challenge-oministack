import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';
import File from '../models/File';

class MeetupController {
  /**
   *
   * @api {get} /meetups Get all Meetups that current user is the manager
   * @apiName Get all Meetups
   * @apiGroup Meetups
   *
   * @apiSuccess {Array} Return collection of meetups.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *         {
   *           "id": 1,
   *           "title": "tsete",
   *           "description": "some description",
   *           "location": "street xtop number 000",
   *           "date": "2019-08-01T11:00:00.000Z",
   *           "banner_id": 1,
   *           "user_id": 1,
   *           "createdAt": "2019-08-05T08:32:52.094Z",
   *           "updatedAt": "2019-08-05T08:32:52.094Z"
   *         },
   *         {
   *           "id": 2,
   *           "title": "tsete",
   *           "description": "some description",
   *           "location": "street xtop number 000",
   *           "date": "2019-08-01T11:00:00.000Z",
   *           "banner_id": 1,
   *           "user_id": 1,
   *           "createdAt": "2019-08-05T08:38:49.633Z",
   *           "updatedAt": "2019-08-05T08:38:49.633Z"
   *         }
   *       ]
   */

  async index(req, res) {
    const meetups = await Meetup.findAll({ where: { user_id: req.userId } });

    res.status(200).json(meetups);
  }

  /**
   *
   * @api {post} /meetups Store a Meetup
   * @apiName Store a meetup
   * @apiGroup Meetups
   *
   * @apiParam {String} title Short title of meetup.
   * @apiParam {String} description Description about meetup.
   * @apiParam {String} location Location where will happens meetup.
   * @apiParam {Date} date Date that meetup will happens. Date format: 2019-08-01T08:00:00-03:00.
   * @apiParam {Integer} banner_id Image of meetup.
   *
   *
   * @apiSuccess {String} title unique ID of user.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 201 OK
   *     {
   *       "id": 1,
   *       "title": "Some title",
   *       "description": "Some description",
   *       "location": "street xpto number 000",
   *       "date": "2019-08-01T11:00:00.000Z",
   *       "user_id": 1,
   *       "banner_id": 1,
   *       "updatedAt": "2019-08-05T08:32:52.094Z",
   *       "createdAt": "2019-08-05T08:32:52.094Z"
   *     }
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      banner_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const parsedDate = parseISO(req.body.date);
    if (isBefore(parsedDate, new Date())) {
      return res.status(400).json({ error: 'Date cannot be passed' });
    }
    const data = { ...req.body, user_id: req.userId };

    const meetup = await Meetup.create(data);

    res.status(201).json(meetup);
  }

  /**
   *
   * @api {put} /meetups/:id Update a Meetup
   * @apiName Update a meetup
   * @apiGroup Meetups
   *
   * @apiParam {Integer} id Identifier of meetup.
   *
   *
   * @apiSuccess {String} title unique ID of user.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 201 OK
   *     {
   *       "title": "Some title",
   *       "description": "Some description",
   *       "location": "street xpto number 000",
   *       "date": "2019-08-01T11:00:00.000Z",
   *       "banner_id": 1
   *     }
   */
  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
      banner_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const parsedDate = parseISO(req.body.date);
    if (isBefore(parsedDate, new Date())) {
      return res
        .status(400)
        .json({ error: 'You cannot edit a meetup that has passed' });
    }

    const isOwnerMeetup = await Meetup.findOne({
      where: { user_id: req.userId, id: req.params.id },
    });

    if (!isOwnerMeetup) {
      return res.status(401).json({
        error: 'You cannot edit a meetup that you are not the manager',
      });
    }

    const {
      title,
      description,
      location,
      date,
      banner_id,
    } = await isOwnerMeetup.update(req.body);

    return res.status(201).json({
      title,
      description,
      location,
      date,
      banner_id,
    });
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    const parsedDate = parseISO(meetup.date);

    if (meetup.user_id !== req.userId) {
      return res.status(401).json({
        error: 'You cannot delete a meetup that was not created by you.',
      });
    }

    if (isBefore(parsedDate, new Date())) {
      return res
        .status(400)
        .json({ error: 'You cannot delete a meetup that has passed' });
    }

    const data = await meetup.destroy();

    return res.json(data);
  }
}

export default new MeetupController();
