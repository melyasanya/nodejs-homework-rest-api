const handleMongoseError = (error, data, next) => {
  error.status = 400;
  next();
};

module.exports = handleMongoseError;
