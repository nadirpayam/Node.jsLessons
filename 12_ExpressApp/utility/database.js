const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost/node-app')
        .then(client => {
            console.log('connected');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}

const getdb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database';
}


exports.mongoConnect = mongoConnect;
exports.getdb = getdb;

/*
database bağlantısı için mysql kurduk > npm install --save mysql2
sequilieze bir orm çeşididir 
sequelize ile db bağlanma komutlarını kodlarla yapabiliriz
yani sorguyu gönderip yanıt beklemek yerine sorguyu yazarken
doğruluğu  yanlışlığını kontrol etmiş oluyoruz
 npm install --save sequelize ile kurduk
*/
/*
mongodb kurmak için > npm install --save mongodb

*/