var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    var farray = [];
    for(var element in obj){
        var oarray = [];
       oarray.push(element);
       oarray.push(obj[element]);
       farray.push(oarray);
    }
    
    console.log(farray);
}
convertListToObject(obj);
function convert(obj) {
    console.log(Object.fromEntries(obj));
}
//convert(obj);