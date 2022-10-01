//As we can see Ram and Shyam Public keys are different because it is a mixture of a private and common key.
//Now Ram public key will get shared with Shyam who will include his private key to Ram public key and create shared key which will be same for both Ram and Shyam.
//Eg Ram private key a = 4, Shyam private key b = 2 and common key which is a prime number P = 17 and g = 5 is the primitive root module p. so we will use this Mathematical equation.
//A =g^a mod P --- 5^4 mod 17=13(public key of shyam); B = 5^2 mod 17 = 8(public key of shyam). Now they will calculate shared key s=B^a mod P-- 8^4 mod 17 = 16 and s = A^b mod P-- 13^2 mod 17 =16. Hence, both are same.
let P, g, x, a, y, b, ramSharedKey, shyamSharedKey;
(P = 17), (g = 5), (a = 4), (b = 2);
x = moduloCalculator(g, a, P);
y = moduloCalculator(g, b, P);
ramSharedKey = moduloCalculator(y, a, P);
shyamSharedKey = moduloCalculator(x, b, P);
console.log('Final key for the Ram is:' + ramSharedKey);
console.log('Final key for the Shyam is:' + shyamSharedKey);
function moduloCalculator(a, b, p) {
  return Math.pow(a, b) % p;
}
