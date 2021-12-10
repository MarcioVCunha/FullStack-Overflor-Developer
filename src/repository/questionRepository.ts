/* eslint-disable import/prefer-default-export */
import connection from '../database/database';
import Question from '../interfaces/questionInterface';

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

export {
  postQuestionRepository,
};
