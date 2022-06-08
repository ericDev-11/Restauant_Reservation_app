function hasValidType(property) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    const prop = data[property];

    try {
      if (property === "reservation_date") {
        const validation = Date.parse(prop);
        if (!validation) {
          const error = new Error(
            "The 'reservation_date' property must have a type of date"
          );
          error.status = 400;
          throw error;
        }
      }

      if (property === "reservation_time") {
        const validation = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!validation.test(prop)) {
          const error = new Error(
            "The 'reservation_time' property must have a type of time."
          );
          error.status = 400;
          throw error;
        }
      }

      if (property === "people") {
        const validation = typeof prop;
        if (validation !== "number") {
          const error = new Error(
            "The 'people' property must have a type of number."
          );
          error.status = 400;
          throw error;
        }
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = hasValidType;
