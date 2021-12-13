/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Answer, QuestionArray } from '../interfaces/questionInterface';
import { getAllQuestions, getClassById, getStudentNameById } from '../repository/questionRepository';

async function getAllQuestionsService(): Promise<QuestionArray> {
  const results: QuestionArray = await getAllQuestions();

  for (const result of results) {
    result.student = await getStudentNameById(result.student);
    result.class = await getClassById(result.class);
  }

  return (results);
}

export default getAllQuestionsService;
