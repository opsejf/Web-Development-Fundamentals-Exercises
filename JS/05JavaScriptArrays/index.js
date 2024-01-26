let quote=["I", "am", "your", "friend"];

console.log(quote);

console.log(quote[2]);

quote.pop();

console.log(quote);

quote.push("father");

console.log(quote);

quote.unshift("Luke");

console.log(quote);

var erroneousWord = "Luke";

let lukeIsHere = quote.find(n => {
    return n === erroneousWord
});

var lukeIsAt;

if(lukeIsHere = true){
    lukeIsAt = quote.findIndex(n => { 
        return n === erroneousWord
    });
    quote[lukeIsAt] = "No";
}

