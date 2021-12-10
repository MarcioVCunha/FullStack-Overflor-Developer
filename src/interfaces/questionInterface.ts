interface Question {
  question: string;
  student: string;
  class: string;
  tags: string;
  submitedAt?: string;
}

interface Answer {
  answeredAt?: string;
  answeredBy?: string;
  answer: string;
  questionId?: string;
}

interface QuestionAndAnswer {
  id?: number;
  question: string;
  student: string;
  class: string;
  tags: string;
  submitAt: string;
  answered: boolean;
  answeredAt?: string;
  answeredBy?: string;
  answer?: string;
}

export {
  Question,
  Answer,
  QuestionAndAnswer,
};
