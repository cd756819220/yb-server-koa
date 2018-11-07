import sequelize from '../config/init-db';

const User = sequelize.import('./User.ts');

sequelize.sync();

export { 
  User,
  sequelize,
};
