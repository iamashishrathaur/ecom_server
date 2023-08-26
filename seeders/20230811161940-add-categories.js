'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Categories', [
      {
         name: 'Electronics',
         description:'this category has electronic categories',
         createdAt: new Date(),
         updatedAt: new Date(),
         
       },
       {
        name: 'Kitchen Ware',
        description:'this category has kitchen ware categories',
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: 'Fashion',
        description:'this category has fashion categories',
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
