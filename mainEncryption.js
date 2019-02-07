function doOtpEncrypt() {
    let toEncode = true;
    document.getElementById("result").value = doOtpEncryptionOrDectyption(toEncode);
}

function doOtpDecrypt() {
    let toEncode = false;
    document.getElementById("result").value = doOtpEncryptionOrDectyption(toEncode);
}

function doOtpEncryptionOrDectyption(encode) {
    let textToChange = document.getElementById("source_text").value;
    let key = document.getElementById("input_key").value.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let message = "";
    if (textToChange.length < 1 || key.length < 1) {
        alert("Please insert text to encrypt and encryption key!");
        return"Try again"
    }
    if (textToChange.length !== key.length) {
        alert("Text length and key length must be same!");
        return"Try again"
    } else {
        return Crypt(message, alphabet, key, textToChange, encode);
    }
}

function Crypt(message, alphabet, key, textToChange, encode) {
    for (let i = 0; i < textToChange.length; i++) {
        if (encode) {
            var indexOfKeyChar = alphabet.indexOf(key[i]);
        } else {
            indexOfKeyChar = -(alphabet.indexOf(key[i]));
        }
        let newLetterIndex = ((alphabet.indexOf(textToChange[i].toLowerCase()) + indexOfKeyChar) % 26 + 26) % 26;
        if (textToChange[i] === textToChange[i].toLowerCase()) {
            message += alphabet[newLetterIndex];
        } else {
            message += alphabet[newLetterIndex].toUpperCase()
        }
    }
    return message;
}