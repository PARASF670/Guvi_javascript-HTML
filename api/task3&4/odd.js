
arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach((item) => {
    if (item % 2 != 0)
        console.log(item);
})
console.log('using Anonymous');
//ANONYMOUS
arr.forEach(function (item) {
    if (item % 2 != 0)
        console.log(item);
})