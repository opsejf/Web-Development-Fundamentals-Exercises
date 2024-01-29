let darthVader = {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: "true"
};



console.log(`${darthVader.allegiance}`);
console.log(`${darthVader.weapon}`);
console.log(`${darthVader.sith}`);
console.log(`${darthVader.jedi}`);

console.log(Object.keys(darthVader).length);


darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];
console.log(`${darthVader.children}`);
console.log(`${darthVader.childNames[0]}`);

console.log(darthVader);

for(let key in darthVader){
    console.log(`Darth Vader's ${key} is ${darthVader[key]}`);
}

darthVader.allegiance = "The Light Side";

console.log(darthVader);

delete darthVader.children;

console.log(darthVader);

let{allegiance, weapon, sith, childNames} = darthVader;

console.log(darthVader);

darthVader = {};

console.log(darthVader);
