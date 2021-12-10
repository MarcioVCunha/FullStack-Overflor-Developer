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

export {
  Question,
  Answer,
};
