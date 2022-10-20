// underscore kullanımı

var _ = require('underscore');

numbers = [3,5,6];

console.log(_.min(numbers));





/*
npm js ve css kütüpahenelerine açılan bir kapıdır
istediğiniz kütüphaneyi npm sitesinde indirme koduna bakarak terminalden indirebiliriz
kendi oluşturudğun kütüphaneleri npm'e yükleyerek başkalarına sunabilirsin

adımlar
-npm init
-npm install paketadı

version belirtmek için>> npm i jquery@2.1.1
version no anlamları> major.minor.patch
patch hata varsa yükselir, minor yeni bir özellik gelince artar, major köklü değişiklik yapınca artar yeni versiyon yani


-npm i webpack --save-dev
uygulama geliştirme aşamasında kullanmak istediğimizde böyle yaparız

global olarak yükleyince pc'ye yüklenir
-npm i live-server --global

modül silmek> npm uninstall paketadı

global paketleri görmek için
-npm list -g
*/