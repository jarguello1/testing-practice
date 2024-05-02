const reverseString = function(message) {
    const splitString = message.split("");
    const reversedString = [];
    for (let i = 0; i < message.length; i++) {
        let letter = splitString.pop();
        reversedString.push(letter);

    }

    return reversedString.join("");

};

module.exports = reverseString;