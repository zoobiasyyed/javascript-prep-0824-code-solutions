/* exported getValue */

function getValue(object, key) {
  return object[key];
}

function setValue(object, key, value) {
  object[key] = value;
}

function getKeys(object) {
  const newArr = [];
  for (const key in object) {
    newArr.push(key);
  }
  return newArr;
}

function getValues(object) {
  const newArr2 = [];
  for (const key in object) {
    newArr2.push(object[key]);
  }
  return newArr2;
}

function toObject(keyValuePair) {
  const newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];

  return newObj;
}
