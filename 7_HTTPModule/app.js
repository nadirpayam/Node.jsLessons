// oluşturmak istediğimiz uygulamada bi http requeset oluştumrak istediğmizde önce bir server oluşturururuz şöyle

const http = require('http');

// server oluştu, server-client iletişimi için req oluşturmamız gerekir res göndeririz sonra
const server = http.createServer((req,res)=> {
  if(req.url==='/'){ // res url'si ana dizin mi diye kontrol ediyoruz
    res.write('hello world');
    res.end(); // iş bitince res'i sonlandırdık
  }  // yani şöyle biz req ile isteğimizi paketli gönderdik server ise sonucu res ile gönderiyor

  if(req.url==='/api/products'){
    res.write('product list');
    res.end(); }
});
server.listen(3000);
console.log('listenin port on 3000');

/*
htpp serverın görevi: kendisine gelen requeset'İ işler ve bunun sonucunda bir response döner
get requesti bilgi talebinde bulunmaktır. header kısmı var
post requesti bilgi gönderirir. header +post kısmı da var 

response header kısmında detay bilgiler, body'de html sayfası döner,json,xml,text de dahil


*/