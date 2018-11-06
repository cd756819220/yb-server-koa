import sequelize from '../config/init-db';

const User = sequelize.import('./User.ts');

sequelize.sync();
// sequelize.sync().then(async () => {
//   User.create({
//     name: '陈天文',
//     mobile: '18911681488',
//     password: '123456',
//     role: 2,
//   });
// });

export { 
  User,
  sequelize,
};
