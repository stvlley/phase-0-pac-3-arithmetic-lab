const a = 10;
const b = 3;

function add(a, b) {
    return (a += b);
}

function divide(a, b) {
    return (a /= b);
}

function increment(a) {
    return(a += 1);
}

function decrement(a) {
    return(a -= 1)
}

function subtract(a, b) {
    return(a -= b)
}
function multiply(a, b) {
    return(a *= b)
}
parseInt("2", 10);


const c = "2"
function makeInt(c) {
   const newC = parseInt(c, 10);
    return newC
}
const d = 2.2222
function preserveDecimal(d){
    const newD = parseFloat(d, 10);
    return newD;
}
