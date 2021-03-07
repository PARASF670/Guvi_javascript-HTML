arr1 = [2, 5, 3, 8, 52, 55, 67];
arr2 = [53, 78, 67, 4, 56, 2, 55];
finalarray = arr1.concat(...arr2);

farr1 = finalarray.sort(function (a, b) {
    return a - b;
});
console.log(farr1);
console.log((farr1[arr1.length-1]+farr1[arr1.length])/2);


