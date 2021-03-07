// passing function to another function 
function greet(name, callback){
    //console.log('line1');
    callback(name);
    console.log('line2');
    //sayhello('ashwini')
}

function sayhello(name){
    console.log('hi i am '+name)
}

greet('ashwini', sayhello);