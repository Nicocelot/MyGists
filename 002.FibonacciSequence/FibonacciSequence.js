// for the formula (https://en.wikipedia.org/wiki/Fibonacci_number)
// Constant varphi and phi
const varphi = (1 + Math.sqrt(5)) / 2;
const phi = Math.pow(-varphi, -1);

/**
 * @arg {number} To
 * @arg {number?} From
 */
function FibonacciSequenceToFrom(To, From) {
    if (typeof From !== "number" || From <= 0) From = 1;
    if (To < From) throw new Error("From is bigger than To.");
    let list = [];
    while (To >= From) {
        list.push(FibonacciSequenceAt(From));
        From++
    }
    return list;
}

function FibonacciSequenceAt(n) {
    return Math.floor((Math.pow(varphi, Math.floor(n)) - Math.pow(phi, Math.floor(n))) / (varphi - phi));
}
