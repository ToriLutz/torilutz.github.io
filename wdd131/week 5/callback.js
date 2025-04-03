// callback = a function that is passed as an 
//argument to another function


hello(leave);


function hello(callback){
    console.log("hell0");
    callback();
}

function wait(){
    console.log("wait");
}

function leave(){
    console.log("leave");
}

function goodbye(){
    console.log("goodbye");
}

sum(displayConsole, 1, 2);


function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}
