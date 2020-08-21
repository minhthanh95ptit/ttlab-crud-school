'use strict';

const faker = require('faker');

export default {
  up: (queryInterface, Sequelize) => {
      let data = [];
      let amount = 100;

      while(amount--){

        let date = new Date();
        data.push({
          name: faker.internet.userName(),
          address: faker.address.streetAddress(),
          phone: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          description: "Hahhahahahahahhahahahahahha",
          createdAt: date,
          updatedAt: date
        });
      }

      return queryInterface.bulkInsert('Schools', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Schools', null, {})
  }
};
