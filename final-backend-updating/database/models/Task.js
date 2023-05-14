const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },  
/*
  employeeId: { // THIS IS A TEST
    type: Sequelize.INTEGER,
    references: {
      model: Employee,
      key: "id"
    }},
*/
  priority: {
    type: Sequelize.STRING
  },

  isComplete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
   }
});

module.exports = Task;
