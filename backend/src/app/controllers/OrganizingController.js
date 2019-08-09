import Meetup from '../models/Meetup';

class OrganizingController {
  /**
   *
   * @api {get} /meetups/organizing Get all Meetups that current user is the manager
   * @apiName Get all Meetups organized by User Logged
   * @apiGroup Meetups
   *
   * @apiSuccess {Array} Return collection of meetups.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *  [
   *     {
   *       "id": 3,
   *       "title": "tsete",
   *       "description": "some description",
   *       "location": "street xtop number 000",
   *       "date": "2019-08-10T11:00:00.000Z",
   *       "banner_id": 1,
   *       "user_id": 1,
   *       "createdAt": "2019-08-06T22:29:57.278Z",
   *       "updatedAt": "2019-08-06T22:29:57.278Z"
   *     }
   *   ]
   */
  async index(req, res) {
    const meetups = await Meetup.findAll({ where: { user_id: req.userId } });

    res.status(200).json(meetups);
  }
}

export default new OrganizingController();
