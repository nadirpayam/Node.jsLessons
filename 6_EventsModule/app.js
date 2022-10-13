const Logger= require('./logger');
const logger = new Logger();
//listener kayıt et, event tetiklendiği anda yapılacak işlemleri burda oluşturuyoruz
logger.on('connection', function(args){ //args parametreleri alır, args.id diyerek tek tekte ulaşabiliriz
    console.log('Bağlantı kuruldu.',args);
})

//birden fazla emitter tanımlayabiliyoruz burda

logger.log('Nadir bağlantıyı kurdu');


/*
burda olay şu bir tane logger oluşturduk burda event'i çalıştıracak kısım
app.js'te ise listener yaptık yani event'i tanımladık
farklı dosyalardan erişim olsun diye logger'ı export'a attık logger.js'te
sonra logger.js'de oluşturduğumuz class'tan nesne oluşturduk ve o nesneyi
10.satırda çalıştırdık


*/