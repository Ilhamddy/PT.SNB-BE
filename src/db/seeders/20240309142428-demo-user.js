"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Ilham maulana",
          email:"ilhammaulana@gmail.com",
          contact: "62812",
          address: "Jakarta Selatan",
          password: "jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dinda Gita maulana",
          email:"dindagitamaulana@gmail.com",
          contact: "62812",
          address: "Jakarta Selatan",
          password: "jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
       
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
