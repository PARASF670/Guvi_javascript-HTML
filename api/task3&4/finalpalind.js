const reversedNum = num => {
    var x = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    if (x === num)
        console.log(x);
}
arr = [1234, 453, 678, 355, 232, 1111111,101,];
arr.forEach(reversedNum);
