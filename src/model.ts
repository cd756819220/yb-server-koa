import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('ybkj', 'root', 'topred168', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/tmp/mysql.sock',
  },
  logging: false,
  operatorsAliases: false,
  define: {
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: true,
  },
  sync: { force: false },
  pool: { max: 5, min: 0, idle: 10000 },
});

const User = sequelize.import('./User.ts');
// sequelize.sync();
sequelize.sync().then(async () => {
  User.create({
    name: '陈天文',
    mobile: '18911681488',
    password: '123456',
    role: 2,
  });
});
export default User;
