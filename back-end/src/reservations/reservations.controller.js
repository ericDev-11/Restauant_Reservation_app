const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const hasValidType = require("../errors/hasValidType");

const has_required_properties = hasProperties(
  "first_name",
  "last_name",
  "mobile_number",
  "reservation_date",
  "reservation_time",
  "people"
);

const has_valid_date = hasValidType("reservation_date");
const has_valid_time = hasValidType("reservation_time");
const has_valid_num = hasValidType("people");

async function list(req, res) {
  const date = req.query.date || asDateString(new Date());
  const data = await service.list(date);
  res.json({ data });
}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [
    has_required_properties,
    has_valid_date,
    has_valid_time,
    has_valid_num,
    asyncErrorBoundary(create),
  ],
};
