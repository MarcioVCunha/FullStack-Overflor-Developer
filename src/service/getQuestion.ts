import { QuestionAndAnswer } from '../interfaces/questionInterface';
import { getQuestionByIdRepository } from '../repository/questionRepository';

async function getQuestionByIdService(questionId: string): Promise<QuestionAndAnswer> {
  const questionInfo: QuestionAndAnswer = await getQuestionByIdRepository(questionId);

  if (!questionInfo.answered) {
    const {
      question,
      student,
      tags,
      answered,
      submitAt,
    } = questionInfo;
    const className = questionInfo.class;

    return ({
      question,
      student,
      class: className,
      tags,
      answered,
      submitAt,
    });
  }

  return (questionInfo);
}

export default getQuestionByIdService;
