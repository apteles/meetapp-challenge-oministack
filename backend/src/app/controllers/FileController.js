import File from '../models/File';

class FileController {
  /**
   *
   * @api {post} /files Store a File
   * @apiName MeetApp
   * @apiGroup File
   * @apiSuccess {String}  name  File name.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 201 OK
   *     {
   *     "url": "http//localhost:3333/files/profile-small.png",
   *     "id": 3,
   *     "name": "878a5f5c54389867048379996932b44a.png",
   *     "path": "profile-small.png",
   *     "updatedAt": "2019-08-02T08:36:07.167Z",
   *     "createdAt": "2019-08-02T08:36:07.167Z"
   *   }
   */
  async store(req, res) {
    const { filename: name, originalname: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.status(201).json(file);
  }
}

export default new FileController();
