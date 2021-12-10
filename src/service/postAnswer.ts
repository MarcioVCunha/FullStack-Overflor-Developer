import { Answer } from '../interfaces/questionInterface';
import { postAnswerRepositoy } from '../repository/questionRepository';

async function postAnswerService(answer: Answer): Promise<string> {
  const status: string = await postAnswerRepositoy(answer);

  return (status);
}

export default postAnswerService;
