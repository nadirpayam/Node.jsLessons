// bir response objesine belli özellikleri şöyle ekleriz

const http = require('http');

const fs = require('fs');


const server= http.createServer((req,res)=> { // server bir event emitter'dır
 //  res.setHeader('Content-Type','text/plain'); // içeriğin tipini belirtebiilriz
  
 /*res.setHeader('Content-Type','application/json'); // geriye json da döndürebiliriz
 
 res.statusCode = 200; // 200 kodu başarı işlem demektir
  res.statusMessage = 'Ok';

  //geri döencek bilgili yazıyoruz
res.write(JSON.stringify({name:'Samsung', price : 3000}));
res.end();
*/
//tarayıcıda açıyoruz dosyayı fs modülüyle yükledik
  fs.readFile('indsex.html',function(error,file) {
        if(error){
          res.setHeader('Content-Type','text/html');
          res.statusCode = 404;
          res.statusMessage = 'Not FOund';
          res.write('dosya bulunamadı');
          res.end();
        }
        else {
          res.setHeader('Content-Type','text/html');
          res.statusCode = 200;
          res.statusMessage = 'ok';
          res.end(file);
        }
  })
});
server.listen(3001);
 
console.log('Listenin port on 3001...'); 