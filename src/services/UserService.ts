import { User } from '../models';

const createUser = async params => User.create(params);
const getUserById = async id => User.findOne({ where: { id } });
const getUserByMobile = async mobile => User.findOne({ where: { mobile } });
const getAllUser = async () => User.findAll();

const getAndCountAllUser = async params => User.findAndCountAll({
  offset: params.offset,
  limit: params.limit,
});
const updateUser = async (id, user) => User.update(
  user,
  { where: { id } },
);

export {
  createUser,
  getUserByMobile,
  getUserById,
  getAllUser,
  getAndCountAllUser,
  updateUser,
};
