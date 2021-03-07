let arr = [1, 2, 3, 5, 3, 5];
let marr = arr.map((item, i) => {
    console.log(`Item at ${i} is ${item}`);
    return item;
})
console.log(marr);