// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const coolCats = [...cats, "Broom"];
    return coolCats;
}
function prependCat() {
   const copyCats = ["Arnold", ...cats];
    return copyCats;
}
function removeLastCat() {
    const copyOfCats = cats.slice(0, 2);
    return copyOfCats;
}
function removeFirstCat() {
    const newCats = cats.slice(-2);
    return newCats;
}