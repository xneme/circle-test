module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Messages',
    [
      {
        header: 'First message.',
        content: 'Migrations work!',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        header: 'Second message',
        content: 'Seeders also work!',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Messages', null, {}),
}
