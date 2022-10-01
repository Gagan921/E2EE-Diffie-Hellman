const crypto = require('crypto');
console.log(crypto.getCurves());
const ram = crypto.ECDH('secp256k1');
ram.generateKeys();
const shyam = crypto.ECDH('secp256k1');
shyam.generateKeys();
const ramPublicKey = ram.getPublicKey().toString('base64');
const shyamPublicKey = shyam.getPublicKey().toString('base64');
const ramSharedKey = ram.computeSecret(shyamPublicKey, 'base64', 'hex');
const shyamSharedKey = shyam.computeSecret(ramPublicKey, 'base64', 'hex');
console.log(ramSharedKey === shyamSharedKey);
console.log('Examples for clear explantion:');
//As we can see Ram and Shyam Public keys are different because it is a mixture of a private and common key.
//Now this public key will get shared with other user who will include his private key to  other user public key and create shared key which will be same for both the users.
//Eg Ram private key a = 4, Shyam private key b = 2 and common key which is a prime number P = 17 and g = 5 is the primitive root module p. so we will use this Mathematical equation.
//A =g^a mod P --- 5^4 mod 17=13(public key of shyam); B = 5^2 mod 17 = 8(public key of shyam). Now they will calculate shared key s=B^a mod P-- 8^4 mod 17 = 16 and s = A^b mod P-- 13^2 mod 17 =16. Hence, both are same.
console.log('Ram public key:' + ramPublicKey);
console.log('Shyam public key:' + shyamPublicKey);
