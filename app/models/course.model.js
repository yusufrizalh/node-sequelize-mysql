module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("courses", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.DECIMAL,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Course;
};
