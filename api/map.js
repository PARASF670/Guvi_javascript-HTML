// array methods 
// map, filter and reduce

// map 

var numarr = [11,12,13,14,15];

// function double (item, index){
//     console.log('array elements is ', item);
//     console.log('array index is', index);
//     return item*2;
// }

var doubledarr = numarr.map(function (item, index){
    console.log('array elements is ', item);
    console.log('array index is', index);
    return item*2;
});
console.log(doubledarr);

var fruits = ['apple','mango','grape'];

var newfruits = fruits.map(function(item){
    return item+'s'
});
console.log(newfruits);
