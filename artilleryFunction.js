function generateRandomData(userContext, events, done) {
  const id = Math.floor(Math.random() * 1000000) + 1;
  userContext.vars.id = id;

  // continue with executing the scenario:
  return done();
}

module.exports = { generateRandomData };