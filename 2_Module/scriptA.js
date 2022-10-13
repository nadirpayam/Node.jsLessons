//browser

//IIFE

/*var controllerA = (function(){
    //scope A

    //private
    var age=20; // bu değeri dışarıda kullanmayacağoz, bu yüzden return içerisinde dahil etmeyeceğiz
    var firstName = 'Sadık';

    var log = function(){
        console.log(this.firstName);
    }
        return {
            firstName,
            log
        }
})();
*/


//nodejs

// private members

//public members
var firstJob = 'engineer';
var log = function(firstJob) {
    console.log(firstJob);
}

//dışarıya açmak istediğin objeyi export'a yaz
module.exports.firstJob = firstJob;
module.exports.log = log;

//bu da bir exports içine atama çeşidi 
/* module.exports = {
    job:firstJob,
    log:log
}*/

console.log(__filename); //dosya yolunu verir o anki çalıştığımız dosyanın
console.log(__dirname); // klasör yolunu verir yani hangi klasörde





/*
Yani modüldeki mantık şudur: iki farklı dosyada değişkenler tanımladık ve bunu çalıştırdık bu değişkenler birbirini ezer en son hangisi tanımlanmışsa
o çalışır yani mesela javada x=2 sonra x=3 dersen çalıştırdığında x 3 olarak çıktı verir. Tarayıcıda IIEF diye tanımladığı şey aslında
değişkenleri bloklar içerisinde tanımlamaktır bu da javada mesela x'i fonkA'da tanımla sonra fonkB'de tanımla ikisinden hangisinde çağırırsan ona göre çıkar
mantığıyla çalışıyor yani birbirini ezme yoktur çünkü lokal değişkenler oluyor. 
Nodejs'te ise module diye bir şey var dosya içinde tanımlamak istediğin şeyi module'İn içinde export'a atabilirisn ve farklı dosyalarda kullanabilirsin. 
Tüm mantık bu yani.

dosyalar modül olarak ele alınıyor
*/