import { Request, Response } from 'express';
import getAllQuestionsService from '../service/getAllQuestions';

async function allQuestions(req: Request, res: Response) {
  const result = await getAllQuestionsService();

  return res.send(result);
}

export default allQuestions;
