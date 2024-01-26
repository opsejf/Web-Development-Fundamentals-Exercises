// var i = 1;



for (i=1; i < 10; ++i) { 
    console.log(i); 
}

var x = 2;
loopCounter = 0;

while(x < 10000){
    x = x*x;
    loopCounter += 1;
    console.log(x);
    console.log(loopCounter);
}


while(x < 10000){
    x = x*x;
    loopCounter += 1;
    console.log(x);
    console.log(loopCounter);
}

while(x>2){
    x=Math.sqrt(x);
    loopCounter -= 1;
    console.log(x);
    console.log(loopCounter);
}