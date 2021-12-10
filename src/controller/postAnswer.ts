import { Request, Response } from 'express';
import { Answer } from '../interfaces/questionInterface';
import postAnswerService from '../service/postAnswer';
import getDate from '../utility_functions/getDate';

async function postAnswer(req: Request, res: Response) {
  const token: string = req.headers.config.toString().replace('Bearer ', '');
  const nowDate = getDate();
  const answer: Answer = req.body;
  const { id } = req.params;

  answer.answeredBy = token;
  answer.answeredAt = nowDate;
  answer.questionId = id;

  const statusMessage: string = await postAnswerService(answer);

  const status: number = statusMessage === 'ok' ? 200 : 500;

  res.sendStatus(status);
}

export default postAnswer;
