var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {

    var obj = {};
    var col = arr;
    for(var i = 0; i < arr.length; i++){
      var dataArray =col[i];
      for(var j= 0; j < col[i].length; j++){
        obj[dataArray[0]] = dataArray[1]
      }
    }
    return obj;
}
var p = fromListToObject(arr);
console.log(p);