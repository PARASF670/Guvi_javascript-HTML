a = [1, 2, 3, 4, 5, 6];
finalarr = [];
let k = 2;
let n = a.length;
rotate(a, k, n);
function rotate(a, k, n) {
    k = k % n;
    for (i = 0; i < n; i++){
        if (i < k)
            finalarr[i]=a[n + i - k];
        else
            finalarr[i]=a[i - k];
    }
}
console.log(finalarr);