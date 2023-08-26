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

    
    await queryInterface.bulkInsert('Products', [
      {
         name: 'Iphone 13',
         description:'this is apple items',
         cost:'100000',
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId:'1'
         
       },
      {
        name: 'Ipad air',
         description:'this is apple items',
         cost:'50000',
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId:'1'
        
      },
      {
        name: 'Macbook pro',
         description:'this is apple items',
         cost:'170000',
         createdAt: new Date(),
         updatedAt: new Date(),
         categoryId:'1'
        
      }

      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
