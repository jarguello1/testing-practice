const caesarCipher = require('./caesarCipher');

test('Cipher encryption', () => {
    expect(caesarCipher.caesarEncrypt('hello my name is jose', 1)).toBe('IFMMP NZ OBNF JT KPTF')
})

test('Cipher encryption', () => {
    expect(caesarCipher.caesarEncrypt('Four score and seven year ago', 2)).toBe('HQWT UEQTG CPF UGXGP AGCT CIQ')
})

test('Cipher decryption', () => {
    expect(caesarCipher.caesarDecrypt('IFMMP NZ OBNF JT DBFTBS', 1)).toBe('hello my name is caesar')
})

test('Cipher decryption', () => {
    expect(caesarCipher.caesarDecrypt('QPEG WRQP C VKOG', 2)).toBe('Once Upon a Time')
})