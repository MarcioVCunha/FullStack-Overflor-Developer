import { Request, Response } from 'express';
import { QuestionAndAnswer } from '../interfaces/questionInterface';
import getQuestionByIdService from '../service/getQuestion';

async function getQuestionById(req: Request, res: Response) {
  const { id } = req.params;

  const question: QuestionAndAnswer = await getQuestionByIdService(id);

  res.send(question);
}

export default getQuestionById;
