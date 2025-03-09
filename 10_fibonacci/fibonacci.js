const fibonacci = function(num) {
    num = parseInt(num);

    let [a,b] = [0,1];
    if (num < 0) {
        return "OOPS"
    } else if (num === 0) {
        return 0;
    }

    while (--num > 0) {
        [a,b] = [b, a+b]
    }
    return b;
}

console.log(fibonacci("25"))
// Do not edit below this line
module.exports = fibonacci;
