const express = require('express');

//express'İ kullanmak için app objesi oluşturalım
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const userRoutes = require('./routes/user');
//parser'ı etkinleştirdik , buffer yerine bunu kullandık
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use(userRoutes);

//dıştan dosyaları img falan ekleyebilmek için middleware
app.use(express.static(path.join(__dirname,'public')));
//yukarıdaki routerLErla eşlemle olmazsa bu middleware kullanır
app.use((req,res) => {
 res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});




app.listen(3001,()=>{
    console.log('listenin on port 3001');
});










/*

npm i express diyince kuruldu
wen framwork'udur express

*/

/*

middleware next-> next>res(yani işlem biter response gönderilir)
diyerek ardı ardına işlem yapabilmeyi sağlar
yani req-res arasında işlemler yapar
*/

/*
routing yani uygulamaya gelen url'de farklı url'ye farklı middleware'ler devreye sokma işlemi
sıra önemlidir hangi rout çalışacaksa başa o gelmeli yoksa önceki çalışır


*/

/*
 kullanıcıdan aldığımız bilgiui console'da göstemrek için
 npm i body-parser deriz

*/

/*
use kullanırsak url eşleşmesi olmasa bile anasayfaya yönlendirir
ancak get kullanınca url birebir eşleşmeli

*/