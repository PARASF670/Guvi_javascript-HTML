var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
  var arr1 = arr[0];
  var arr2 = arr[1];
  var ob1 = Object.fromEntries(arr1);
  var ob2 = Object.fromEntries(arr2);
  var final = [ob1, ob2];
  console.log(final);
}
transformEmployeeData(arr);