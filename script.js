// window.onload = function () {
//     inputFunc()
// }
function inputFunc() {
    var inputEnc = document.getElementById('inputEncrypt').value
    var inputKey = document.getElementById('inputKey').value

    var enctypt = crypt(inputEnc, inputKey)
    var decrypt = crypt(enctypt,inputKey)
    document.getElementById('encryptOutput').innerHTML = enctypt
    document.getElementById('decryptOutput').innerHTML = decrypt
    return false
}

const crypt = (input, key) => {
    var output = []
    var charCode

    for (var i = 0; i < input.length; i++) {
        charCode = input.charCodeAt(i) ^ key[i % key.length].charCodeAt(0)
        output.push(String.fromCharCode(charCode))
    }
    return output.join("")
}
