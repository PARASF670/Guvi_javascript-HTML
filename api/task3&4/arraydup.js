arr = [2, 3, 4, 1,53, 221, 4, 2, 3, 121,23,23];
let unique = [];
arr.forEach((c) => {
    if (!unique.includes(c)) {
        unique.push(c);
    }
});

console.log(unique);