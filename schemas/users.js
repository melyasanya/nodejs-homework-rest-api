const Joi = require("joi");
const allowedSubscriptions = ["starter", "pro", "business"];

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...allowedSubscriptions)
    .required(),
});

module.exports = subscriptionSchema;
