const fs = require('fs');

const files = fs.readdir('./',function(error,data){ //hata varsa error,okumalar dataya aktarılır


    if(error) {
        console.log(error);
    }
    else {
        console.log(data); // data klasörümüz içindeki dosyaları yazdı
    }

})

const dataa = fs.readFile('oku.txt','utf-8',function(error,dataa){
   if(error) {
        console.log(error);
    }
    else {
        console.log(dataa); // oku.txt içerisini yazdı
    }
})


//dosya oluşturma
//dosya adı,içine yazılacak şeyler
// dosyayı tekrardan oluşturmak istersen öncekini siler
fs.writeFile('deneme.txt','Naber',function(error){
    if(error) {
        console.log(error);
    }
    else {
        console.log('Dosya oluşturuldu');
    }
})

//önceki içeriğe ekleme yapar
fs.appendFile('deneme1.txt','Nasılsın',function(error){
    if(error) {
        console.log(error);
    }
    else {
        console.log('Dosya oluşturuldu');
    }
})

//dosya silme işlemi
fs.unlink('deneme1.txt',function(error){
    console.log('Dosya silindi.');
})

//dosyayı yeniden isimlendirelim
// eski dosya ismi, yeni dosya ismi

fs.rename('deneme.txt','denememiz.txt', function(error){
    console.log('Dosya ismi değiştirildi.');
})






/*
dosyalarla ilgili işlemlerde bu modülü kullanırız
dosya ekleme silme okuma vs işlemler
*/

/*
asenkron türde okuma işlemi: bir iş yapılırken başka işler de varsa onlar da yapılır
senkron türde okuma işlemi: o iş bitene kadar başka iş yapma

*/