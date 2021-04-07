const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';

const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

let pswd = '';

function generator(length) {
    for ( i in length) {
        pswd += randomCharacter;
        console.log('1');
    }
    return pswd;
}

generator(Math.floor(Math.random() * 18));
console.log('poop');
