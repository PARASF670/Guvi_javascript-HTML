var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
    arr = [];
    for (i = 0; i < Object.keys(obj).length; i++)
        arr.push(obj[i].values);
    console.log(arr);    
}
printAllValues(obj);