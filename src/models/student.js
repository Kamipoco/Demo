"use strict";
const { Model } = require("sequelize");
import Student from "../models/student";
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Classroom, {
        foreignKey: "classroom_id",
        as: "Student",
      });
    }
  }
  Student.init(
    {
      student_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
