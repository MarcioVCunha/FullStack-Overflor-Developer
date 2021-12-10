import connection from '../database/database';
import { Question, Answer, QuestionAndAnswer } from '../interfaces/questionInterface';

async function postQuestionRepository(questionInfo: Question): Promise<string> {
  try {
    const userId = await connection.query(`
      SELECT
        id
      FROM
        students
      WHERE
        name = $1;
    `, [questionInfo.student]);

    const classId = await connection.query(`
      SELECT
        id
      FROM
        classes
      WHERE
        "className" = $1;
    `, [questionInfo.class.toLowerCase()]);

    await connection.query(`
      INSERT INTO
        questions (student, question, class, tags, "submitAt")
      VALUES
        ($1, $2, $3, $4, $5);
    `, [userId.rows[0].id, questionInfo.question, classId.rows[0].id, questionInfo.tags, questionInfo.submitedAt]);

    const questionId = await connection.query(`
      SELECT
        id
      FROM
        questions
      WHERE
        question = $1
      ORDER BY
        id DESC;
    `, [questionInfo.question]);

    return (`${questionId.rows[0].id}`);
  } catch (error) {
    return (error);
  }
}

async function postAnswerRepositoy(answer: Answer): Promise<string> {
  try {
    const idAnswerer = await connection.query(`
      SELECT
        id
      FROM
        students
      WHERE
        token = $1;
    `, [answer.answeredBy]);

    await connection.query(`
      UPDATE
        questions
      SET
        ("answeredAt", "answeredBy", answer, answered) = ($1, $2, $3, true)
      WHERE
        id = $4;
    `, [answer.answeredAt, idAnswerer.rows[0].id, answer.answer, answer.questionId]);
    return ('ok');
  } catch (error) {
    return (error);
  }
}

async function getQuestionByIdRepository(questionId: string): Promise<QuestionAndAnswer> {
  try {
    const question = await connection.query(`
    SELECT
      student, question, class, tags, answered, "submitAt", "answeredAt", "answeredBy", answer
    FROM
      questions
    WHERE
      id = $1;
  `, [questionId]);

    const student = await connection.query(`
    SELECT
      name
    FROM
      students
    WHERE
      id = $1;
  `, [question.rows[0].student]);

    const className = await connection.query(`
    SELECT
      "className"
    FROM
      classes
    WHERE
      id = $1;
  `, [question.rows[0].class]);

    if (question.rows[0].answered) {
      const answerName = await connection.query(`
        SELECT
          name
        FROM
          students
        WHERE
          id = $1;
      `, [question.rows[0].answeredBy]);

      question.rows[0].answeredBy = answerName.rows[0].name;
    }

    question.rows[0].student = student.rows[0].name;
    question.rows[0].class = className.rows[0].className;

    return (question.rows[0]);
  } catch (error) {
    return (error);
  }
}

export {
  postQuestionRepository,
  postAnswerRepositoy,
  getQuestionByIdRepository,
};
