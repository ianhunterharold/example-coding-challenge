import { Request, Response } from 'express';

/**
 * User Profile Controller
 */

const users = [
  {
    id: 1,
    name: 'Jane',
    email: 'jane@example.com',
  },
  {
    id: 2,
    name: 'Paula',
    email: 'paula@example.com',
  },
];

/**
 * Retrieve a user from the data store.
 *
 * @param {*} req
 * @param {*} res
 */
const getUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);
  res.json(user);
};

export default getUser;