import { User } from '../models';

const createUser = async params => User.create(params);
const getUserById = async id => User.findOne({ 
  where: { id },
  attributes: ['id', 'name', 'realname', 'mobile', 'role', 'profilePhoto', 'sex', 'birthday', 'address'], 
});
const getUserByMobile = async mobile => User.findOne({ where: { mobile } });
const getAllUser = async () => User.findAll();

const getAndCountAllUser = async params => User.findAndCountAll({
  offset: params.offset,
  limit: params.limit,
});
const updateUserById = async (id: number, user: object) => User.update(
  user,
  { where: { id } },
);
const updateUserPassword = async (id: number, password: string) => User.update(
  { password },
  { where: { id }, fields: ['password'] },
);
export {
  createUser,
  getUserByMobile,
  getUserById,
  getAllUser,
  getAndCountAllUser,
  updateUserById,
  updateUserPassword,
};
