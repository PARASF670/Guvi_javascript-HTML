var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
  obj = Object.fromEntries(arr);
  console.log(obj);
}
fromListToObject(arr);
