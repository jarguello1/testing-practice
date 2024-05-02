const caesarCipher = require("./caesarCipher");

function nextChar(c, key) {
    var i = (parseInt(c, 36) + key ) % 36;
    return (!i * 10 + i).toString(36);
}

function caesarEncrypt(phrase, key) {
    const splitString = phrase.split("");
    const reversedString = []
    const encryptedPhrase = []
    for (let i = 0; i < phrase.length; i++) {
        let letter = splitString.pop();
        if (letter == ' ') {
            reversedString.push(letter);
        }
        else {
            reversedString.push(nextChar(letter, key));
        }
    }
    for (let i = 0; i < phrase.length; i++) {
        let letter = reversedString.pop();
        encryptedPhrase.push(letter);
    }
    return encryptedPhrase.join("").toUpperCase()
}

function lastChar(c, key) {
    var i = (parseInt(c, 36) - key ) % 36;
    return (!i * 10 + i).toString(36);
}

function caesarDecrypt(phrase, key) {
    const splitString = phrase.split("");
    const reversedString = []
    const encryptedPhrase = []
    for (let i = 0; i < phrase.length; i++) {
        let letter = splitString.pop();
        if (letter == ' ') {
            reversedString.push(letter);
        }
        else {
            reversedString.push(lastChar(letter, key));
        }
    }
    for (let i = 0; i < phrase.length; i++) {
        let letter = reversedString.pop();
        encryptedPhrase.push(letter);
    }
    return encryptedPhrase.join("").toLowerCase()
}

module.exports = {caesarEncrypt, caesarDecrypt}