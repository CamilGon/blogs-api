'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', { 
      id: {type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      display_name: {type: Sequelize.STRING,
        allowNull: false,
      },
      email: {type: Sequelize.STRING,
        allowNull: false,
      },
      password: {type: Sequelize.STRING,
        allowNull: false,
      },
      image: {type: Sequelize.STRING,},
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('users');
  }
};
