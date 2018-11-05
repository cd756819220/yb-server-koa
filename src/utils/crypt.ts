import * as bcrypt from 'bcryptjs';

const docrypt = (value) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(value, salt);
};

export default docrypt;
