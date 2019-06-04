const faker = require('faker');

const Availability = require('./db.js');

const seats = () => faker.random.number({
  min: 2,
  max: 10,
});

const booked = () => faker.random.number({
  min: 3,
  max: 15,
});

const createRestaurant = () => {
  Availability.create({
    name: faker.lorem.word(),
    booked: booked(),
    '6:00 PM': seats(),
    '6:15 PM': seats(),
    '6:30 PM': seats(),
    '6:45 PM': seats(),
    '7:00 PM': seats(),
    '7:15 PM': seats(),
    '7:30 PM': seats(),
    '7:45 PM': seats(),
    '8:00 PM': seats(),
    '8:15 PM': seats(),
    '8:30 PM': seats(),
  });
}

module.exports = createRestaurant;