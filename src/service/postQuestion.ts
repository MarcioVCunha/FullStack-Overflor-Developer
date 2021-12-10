import Question from '../interfaces/questionInterface';
import { postQuestionRepository } from '../repository/questionRepository';

async function postQuestionService(questionInfo: Question): Promise<string> {
  const questionId: string = await postQuestionRepository(questionInfo);

  return (questionId);
}

export default postQuestionService;
