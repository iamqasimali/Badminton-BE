const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class users extends Model {}

users.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    email: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },

    password: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "tournament_organizer", "player", "guest"],
      allowNull: false,
      defaultValue: "guest",
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
      allowNull: false,
      defaultValue: "male",
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    realName: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    telephoneNumber: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    petName: {
      type: DataTypes.STRING(100),
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
    },
    prefecture: {
      type: DataTypes.STRING(40),
    },
    city: {
      type: DataTypes.STRING(40),
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
    },
    myRacket: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "users",
    sequelize,
  }
);

module.exports = users;
