const palindromes = function (palindrome) {
    const cleaned = palindrome.toLowerCase().replace(/[\W_]/g, "")
    const reverse = cleaned.split("").reverse().join("");

    if (cleaned == reverse) {
        return true
    } else {
        return false
    }
};

console.log(palindromes('r3ace3car'))

// Do not edit below this line
module.exports = palindromes;
