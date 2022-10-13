// uygulamaya gelen talepleri yönlendiriyoruz

const http = require('http');
const route = require('./routes');
const server = http.createServer(route);
server.listen(3010);
 
console.log("Listenin port on 3010");

/*
burda şunu yaptık kullanıcı input kutusuna bir şey yazdı ve bunu sunucuya gönderdik POST metoduyla, sonra kullanıcın yazdığı
mesajı buffer ile kendimize de gösterdik buffer sayısal bir dizi biz bunu string'e çevirdik ve kullanıcınn yazdığı mesaja erişim sağladık

post ettiğimiz bilgi iserver tarafından elde edip dosya içerisine kaydetttik
*/