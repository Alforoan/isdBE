const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

// const { DataTypes } = require('sequelize');
// let sequelize;



class User extends Model {
	checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   isEmail: true,
      // }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'user',
  }
);

User.associate = (models) => {
  User.hasMany(models.Member, {
    foreignKey: 'member_id',
  });
};

// User.hasMany(Request, {
//   foreignKey: 'userID',
//   onDelete: 'CASCADE'
// });

module.exports = User;
