import File from '../models/File';

class FileController {
  async store(req, res) {
    return res.json('ok');
  }
}

export default new FileController();
