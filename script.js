const log = (params)=> console.log(params);
function ten(callback){
    log("10")
    setTimeout(callback,1000);
   
}

function nine(callback){
    log("9")
    setTimeout(callback,1000);
}
function eight(callback){
    log("8")
    setTimeout(callback,1000)
}

function seven(callback){
    log("7")
    setTimeout(callback,1000)
}

function six(callback){
    log("6")
    setTimeout(callback,1000)
}
function five(callback){
    log("5")
    setTimeout(callback,1000)
}
function four(callback){
    log("4")
    setTimeout(callback,1000)
}
function three(callback){
    log("3")
    setTimeout(callback,1000)
}function two(callback){
    log("2")
    setTimeout(callback,1000)
}
function one(callback){
    log("1")
    setTimeout(callback,1000)
}
function happyIndependenceday(callback){
    log("Happy Independence Day...!!!")
    setTimeout(callback,1000)
}

 function task(){

//call back hell 
    ten(()=>{
        nine(()=>{
            eight(()=>{
                seven(()=>{
                    six(()=>{
                        five(()=>{
                            four(()=>{
                                three(()=>{
                                    two(()=>{
                                        one(()=>{
                                            happyIndependenceday();
                                        })
                                    })
                                })
                            })
                        })
                    });

                })

            })

        })
    });
    

    
}

task();

