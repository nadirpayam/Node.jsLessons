const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-app', 'root', 'mysqlaaa', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;






/*
database bağlantısı için mysql kurduk > npm install --save mysql2
sequilieze bir orm çeşididir 
sequelize ile db bağlanma komutlarını kodlarla yapabiliriz
yani sorguyu gönderip yanıt beklemek yerine sorguyu yazarken
doğruluğu  yanlışlığını kontrol etmiş oluyoruz
 npm install --save sequelize ile kurduk
*/