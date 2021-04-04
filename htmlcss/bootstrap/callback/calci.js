function sum(a,b){
    console.log( a+b);
}
function subt(a,b){
    console.log( a-b);}
function divide(a,b){
    console.log( a/b);}
function mul(a,b){
    console.log( a*b);}

function calci(a,b,add,sub,dv,ml){
    add(a, b);
    sub(a, b);
    dv(a, b);
    ml(a, b);
}

calci(3, 6, sum,subt,divide,mul);
// console.log(calci(3, 6, sum));
// console.log(calci(3, 6, sum));
// console.log(calci(3, 6, sum));
