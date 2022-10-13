//path module kullanımı

const path = require('path'); //bu şekilde path modulüne erişim sağladık

let result = path.resolve('1_app.js'); // dosyanın klasörünü bulduk

result = path.extname('1_app.js'); // dosyanın uzantısını bulduk

result = path.parse(__filename); // o anki dosyayı buluruz tüm yollarını

console.log(result.root); // dosyanın rootû yanı c diskinde olduğunu bulduk

console.log(result);

/*
path adı üstüne yol, bu modülde bi dosyanın uzantısı, tam yolunu bulmak
gibi işlemler yaparız

*/