var x = 10;
setTimeout(()=>{
    // console.log(x);
    document.querySelector("#board").innerHTML = x;
    setTimeout(()=>{
        //console.log(x-1);
        document.querySelector("#board").innerHTML = x-1;
        setTimeout(() => {
            //console.log(x - 2);
            document.querySelector("#board").innerHTML = x-2;
        
            setTimeout(() => {
               // console.log(x - 3);
               document.querySelector("#board").innerHTML = x-3;
                setTimeout(() => {
                    //console.log(x - 4);
                    document.querySelector("#board").innerHTML = x-4;
                    setTimeout(() => {
                        document.querySelector("#board").innerHTML = "Happy Independence Day";
                    }, 1000)
                },1000)
                
            }, 1000)
        }, 1000)
    },1000)
},1000
)
