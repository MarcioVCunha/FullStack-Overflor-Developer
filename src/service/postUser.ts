import User from '../interfaces/userInterfaces';
import postUserRepository from '../repository/userRepository';

async function postUserService(user: User): Promise<string> {
  const token = await postUserRepository(user);

  return (token);
}

export default postUserService;
