
setTimeout(()=>{
    
    document.querySelector("#board").innerHTML = 10;
    setTimeout(()=>{
        
        document.querySelector("#board").innerHTML = 9;
        setTimeout(() => {
            
            document.querySelector("#board").innerHTML = 8;
        
            setTimeout(() => {
               
                document.querySelector("#board").innerHTML = 7;
                setTimeout(() => {
                    
                    document.querySelector("#board").innerHTML = 6;
                    setTimeout(() => {
                        document.querySelector("#board").innerHTML = 5;
                        setTimeout(() => {
            
                            document.querySelector("#board").innerHTML = 4;
                        
                            setTimeout(() => {
                               
                                document.querySelector("#board").innerHTML = 3;
                                setTimeout(() => {
                                    
                                    document.querySelector("#board").innerHTML = 2;
                                    setTimeout(() => {
                                    
                                        document.querySelector("#board").innerHTML = 1;
                                        setTimeout(() => {
                                            document.querySelector("#board").innerHTML = "Happy Independence Day";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        },1000)
    },1000)
},1000)
