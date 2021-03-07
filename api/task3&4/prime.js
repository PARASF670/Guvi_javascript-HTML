arr = [2, 3, 4, 5, 1, 65, 33,2,27,88,100,7,11,13,43];
final = [];
prime = (item) => {
    if (item == 1)
        return
    if (item == 2)
        final.push(item);
    else if(item>2){
        for (i = 2; i <= Math.round(item / 2); i++) {
            if (item % i == 0)
                return;
        }
        final.push(item);
        return;
    }
}
arr.forEach(prime);
console.log(final);