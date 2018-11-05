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
  sync: { force: true },
  pool: { max: 5, min: 0, idle: 10000 },
});

export default sequelize;