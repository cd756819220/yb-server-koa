import * as Sequelize from 'sequelize';
const User = (sequelize, DataTypes) => sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment: 'ID',
  },
  profilePhoto: {
    type: DataTypes.STRING(64),
    allowNull: true,
    comment: '头像',
  },
  name: {
    type: DataTypes.STRING(12),
    allowNull: true,
    comment: '昵称',
  },
  realname: {
    type: DataTypes.STRING(12),
    allowNull: true,
    comment: '真实姓名',
  },
  mobile: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true, // 唯一性约束
    comment: '手机号',
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
    comment: '密码',
  },
  role: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    comment: '权限',
  },
  sex: {
    type: DataTypes.INTEGER(1),
    allowNull: true,
    comment: '性别',
  },
  birthday: {
    type: DataTypes.STRING(20),
    allowNull: true,
    comment: '年龄',
  },
  address: {
    type: DataTypes.STRING(40),
    allowNull: true,
    comment: '住址',
  },
  createdAt: {
    type: DataTypes.DATE,   
    defaultValue: Sequelize.NOW,
    field: 'created_at',
    allowNull: false,
  }, 
  updatedAt: { 
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW, 
    field: 'created_at',      
    allowNull: false,
  },
},
{
  timestamps: false,
  comment: '用户表',
  charset: 'utf8',
  collate: 'utf8_general_ci',
});

export default User;