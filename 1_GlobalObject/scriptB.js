//tarayıcı

//tarayıcılarda kullandığımız bir window objesi var

//console.log(window); //nodejs'de yok tarayıcıda var içerisinde birçok metot barındırıyor

//var firstName="Nadir";
//console.log(firstName); //tanımlamış olduğumuz değerler window objesinin içerisine aktarılıyor tarayıcının consol kısmında window altına firstname var artık
// bu bizm ne işimize yarayacak? 
//farklı dosyalrdaki oluşturulmuş içerikler tek bir window içerisinde oluşur bu da bizim farklı yerleri bir arada toplamamızı sağlar
//yani farklı dosyalarıda oluşturulmuş içerikleri kullanmamızı sağlar
/*
Yani şöyle sen iki ayrı dosyada değişkenler atadın, window kullanırsan a dosyasındaki a değişkenini b dosyasında kullanabilirsin
window'u bir tanesinde tanımlaman yeterli 
*/



//nodejs'de window yerine global objesi var aynı mantıkda

var job = "Engineer";
console.log(global.job); // job global değişkeni içerisine eklenmiyor ama windowa ekleniyordu, bunun çıktısı undefined oldu

// bu açığı(globalle farklı dosyalardaki değişkenleri kullanamıyoruz) kapatmak için modül kavramını kullanırız

//global değişken içerisinde default metotlara ulaşabiliriz global.console gibi

