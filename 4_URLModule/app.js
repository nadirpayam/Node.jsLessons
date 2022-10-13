// url modül kullanımı

const url = require('url');

const address = 'https://sadikturan.com/kurslar?year=2019&month=nisan';

let result = url.parse(address, true) // burda true dememiziz nedeni uygulamadaki kullanıcıdan alınan bilginin bir objeye dönüştürülmesi

console.log(result);

console.log(result.path); // adress altındaki bilgilere erişiyoruz tek tek bu şekilde
console.log(result.query.year);
















/*
url modülüyle bir url'nin her şeyine erişebiliyoruz
*/