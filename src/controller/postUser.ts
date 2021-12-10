import { Request, Response } from 'express';
import postUserService from '../service/postUser';

async function postUser(req: Request, res: Response) {
  const user = req.body;

  const token: string = await postUserService(user);

  if (token === 'Name already used') {
    return (res.send(token).status(409));
  }

  return (res.send({ token }));
}

export default postUser;
