import User from '../interfaces/userInterfaces';
import postUserRepository from '../repository/userPost';

async function postUserService(user: User): Promise<string> {
  const token = await postUserRepository(user);

  return (token);
}

export default postUserService;
