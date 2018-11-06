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
const updateUserById = async (id, user) => User.update(
  user,
  { where: { id } },
);

export {
  createUser,
  getUserByMobile,
  getUserById,
  getAllUser,
  getAndCountAllUser,
  updateUserById,
};
