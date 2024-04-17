'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {[
    queryInterface.addColumn(
      'News', // table name
      'userId', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
       
      },
    ),
    queryInterface.addColumn(
      'News',
      'categoryId',
      {
        type: Sequelize.STRING,
        allowNull: true,
        
      },
    ),
  ]
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('News', 'userId'),
      queryInterface.removeColumn('News', 'categoryId'),
    ]);
  }
};
