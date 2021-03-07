// spread operator ...
// copy array
var arr1 = ['a','b','c',['d','e']];
var arr2 = [...arr1];
arr1[3][0]='abb'
console.log(arr2);

// inserting values

var arr3 = [1,2,3]

var arr4 = [...arr3,4,5,6,];

console.log(arr3,arr4)

//array to arguments 

function add(num1,num2,num3)
{
    console.log(num1+num2+num3)
}

let numarr = [11,12,13];

add(...numarr);

console.log(Math.min(...numarr))
