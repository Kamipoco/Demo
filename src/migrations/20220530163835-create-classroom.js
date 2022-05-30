// "use strict";
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("Classrooms", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       class_name: {
//         type: Sequelize.STRING,
//       },
//       description: {
//         type: Sequelize.STRING,
//         defaultValue: "",
//       },
//       status: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable("Classrooms");
//   },
// };
