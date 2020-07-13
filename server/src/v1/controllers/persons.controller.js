const personsService = require('../services/persons.service');

const getPersons = (req, res) => {
  const persons = personsService.getPersons();
  res.status(200).send(persons);
};

module.exports = {
  getPersons,
};
