const express = require('express');

//express'İ kullanmak için app objesi oluşturalım
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine','pug');
app.set('views','./views'); //ana dizin altındaki views klasörüne views özelliği pugını ekledik templa engine mantığı 



const adminRoutes = require('./routes/admin');

const userRoutes = require('./routes/shop');
//parser'ı etkinleştirdik , buffer yerine bunu kullandık
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use(userRoutes);

app.set('title', 'My Site'); // key,value mantığı
console.log(app.get('title')); // çıktısı My Site, app.set' içerisinde set ettiğimiz değeri alabiliyoruz
//yani uygulamanın herhangi bir alanında değeri set edip global olarak kullanabiliriz



//dıştan dosyaları img falan ekleyebilmek için middleware
app.use(express.static(path.join(__dirname,'public')));
//yukarıdaki routerLErla eşlemle olmazsa bu middleware kullanır

const errorController = require('./controllers/errors');
app.use(errorController.get404Page);




app.listen(3000,()=>{
    console.log('listenin on port 3000');
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

/*
npm install pug diyerek pug paketini dahil ettik
ve template-engine'de kullanacağız da
bu da diyelim bir data verdi kullanıcı ve dinamik siteye data kullanıldı bu işe yarıyor

app.set methodunu uygulama ayarları yapmak için kullanıyoruz
*/


// her html sayfasının bir pug'ı olmalı


/*
şimdi biz pug'larda kalıplarımız aynı sadece bazı yerleri değiştiriyoruz
her pug'da sayfa kodlarını tekrar yazmamak için layout'lar oluşturuyoruz
pug'lardaki farklılıkları entegre etmek için ise block'ları kullanıyoruz
yani layout kod tekrarını engeller

pug gelen verileriv html'e çevirip direkt kullanıcılara göstermeye yarar


*/


// include'u layout'lar çok karışık olmasın kısımlara bölelim diye oluşturduk

// bi methodun mixin olduğunu belirtmek için başına + ekliyoruz


/*
MVC bi design pattern'dır
model-contorellers-view kısımlarından oluşur



*/