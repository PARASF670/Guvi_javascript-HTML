//higher order function 
// function can return a function 
function demo(){
    return demo2
   function demo2() {
      return 'i am demo2 returned value'
    }
}

var result = demo();
//console.log(result);

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
