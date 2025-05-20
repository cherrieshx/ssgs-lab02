
const { reverseString, isPalindrome,truncateString,countCharacters } = require('../src/stringUtils');

test('Verifica della la funzione reverseString inverta correttamente una stringa ad esempio "ciao"', () => {
    expect(reverseString('ciao')).toBe('oaic');
});

test('Verifica della la funzione isPalindrome riconosca una stringa palindroma ad esempio "esso"', () => {
    expect(isPalindrome('esso')).toBe(false);
});

test('Verifica della la funzione isPalindrome riconosca una stringa palindroma ad esempio "osso"', () => {
    expect(isPalindrome('osso')).toBe(true);
});

test('Verifica della la funzione isPalindrome riconosca una stringa palindroma ad esempio "esso"', () => {
    expect(isPalindrome('osso')).toBe(true);
});

test('Verifica della funzione truncateString tronchi correttamente una stringa ad esempio "Hello World!" con lunghezza massima 5', () => {
    expect(truncateString('Hello World!', 5)).toBe('Hello...');
});

test('Verifica della funzione truncateString ritorna correttamente la stringa stessa "Hello" con lunghezza massima 4', () => {
    expect(truncateString('Hello', 4)).toBe('Hello');
});

test('Verifica della funzione countCharacters conti correttamente i caratteri di una stringa ad esempio "Domodossola"', () => {
    expect(countCharacters('Domodossola')).toEqual({
        D: 1, o: 4, m: 1, d: 1, s: 2, l: 1,a: 1
    });
});