var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
    otemp = [];
    itemp = [];
    var p = arr.length;
    itemp.push(arr[0]);
    itemp.push(arr[p - 1]);
    otemp.push(itemp);
    obj = Object.fromEntries(otemp);
    console.log(obj);
    }
transformFirstAndLast(arr);
