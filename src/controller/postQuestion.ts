import { Request, Response } from 'express';
import { Question } from '../interfaces/questionInterface';
import postQuestionService from '../service/postQuestion';
import getDate from '../utility_functions/getDate';

async function postQuestion(req: Request, res: Response) {
  const questionInfo: Question = req.body;
  const dateNow: string = getDate();

  questionInfo.submitedAt = dateNow;

  const idQuestion: string = await postQuestionService(questionInfo);

  res.send(idQuestion);
}

export default postQuestion;
