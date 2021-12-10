import { v4 as uuid } from 'uuid';
import connection from '../database/database';
import User from '../interfaces/userInterfaces';

async function postUserRepository(user: User): Promise<string> {
  const token = uuid();
  const userClass: string = user.class.toLowerCase();

  try {
    const allClasses = await connection.query(`
      SELECT
        *
      FROM
        classes
      WHERE
        "className" = $1
    `, [userClass]);

    if (allClasses.rowCount === 0) {
      await connection.query(`
        INSERT INTO
          classes ("className")
        VALUES
          ($1)
      `, [userClass]);
    }

    const userClassId = await connection.query(`
      SELECT
        id
      FROM
        classes
      WHERE
        "className" = $1;
    `, [userClass]);

    const allStudents = await connection.query(`
      SELECT
        *
      FROM
        students
      WHERE
        name = $1
    `, [user.name]);

    if (allStudents.rowCount === 0) {
      await connection.query(`
        INSERT INTO
          students (name, token, "classId")
        VALUES
          ($1, $2, $3);
      `, [user.name, token, userClassId.rows[0].id]);
    } else {
      return ('Name already used');
    }

    return (`${token}`);
  } catch {
    return ('Server error');
  }
}

export default postUserRepository;
