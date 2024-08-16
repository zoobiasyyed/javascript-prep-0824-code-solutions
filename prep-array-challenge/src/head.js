/* exported head */
function head(array) {
  return array[0];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  let x = [];
  for (let i = 1; i < array.length; i++) {
    x.push(array[i]);
  }
  return x;
}

function initial(array) {
  let x = [];
  for (let i = 0; i < array.length - 1; i++) {
    x.push(array[i]);
  }
  return x;
}

function reverse(array) {
  let x = [];
  for (let i = array.length - 1; i >= 0; i--) {
    x.push(array[i]);
  }
  return x;
}

function compact(array) {
  let x = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      x.push(array[i]);
    }
  }
  return x;
}
