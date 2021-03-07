arr = [12345,456];
final = [];
var reverse ;
palindrome = (item) => {
    siz = item.toString().length;
    for (i = 0; i < item.toString().length && siz>=1; i++,siz--){
        final[i] = item % Math.pow(10, siz);
    }
    console.log(final);
    
   // for (i = item.toString().length - 1; i >= 0; i--)
     //   rev = rev.concat(final[i]);
}
arr.forEach(palindrome);
//console.log(rev);