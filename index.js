
function createNext(record) {
  const { id, date, vendor } = record;
  // this should copy primitives by value to a new object
  const next = { id, date, vendor };
  return changeOrdersToArray(record, moveCustomerId(record, next));
}

exports.createNext = createNext;

function moveCustomerId(record, next) {
    next.customerId = record.customer.id;
    return next;
}

function changeOrdersToArray(record, next) {
  const keys = Object.keys(record.order);
  next.order = keys.map(key => ({
   item: key,
   quantity: record.order[key].quantity,
   price: record.order[key].price,
   revenue: record.order[key].price * record.order[key].quantity 
  }));
  return next;
}

function processRecords(records) {
  const nextRecords = records.map(createNext);
  return nextRecords;
}

exports.default = processRecords;
