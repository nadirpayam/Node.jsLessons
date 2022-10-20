/*bazı yönlendimre(route) işlemlerini yaptık hepsini app.Js'de skalamak yerine
ayrı bir mlodül içerisinde saklayalım yani burda */

const fs = require('fs');

const qs = require('querystring'); // stringi objeye dönüştürüyor

const routeHandler=(req,res)=> {
const method=req.method;
const url = req.url;
res.setHeader('Content-Type','text/html');
if(url == '/') {
   res.write(`
     <html>
        <head> 
           <title> Enter Message </title>
        </head>
        <body>
          <form method="POST" action="/log">
          <input type="text" name="message">
           <button type="submit">Save</button>
          </form>
        </body>
     </html>
    `);
   return res.end();
}
if(url==='/log' && method ==='POST') {
//body parsing (bodyParser)
const body = [];
req.on('data',(chunk)=> {
body.push(chunk);
console.log(chunk); // buffet oluştu
});
//gelen bilgiyi okumamızı sağlar
req.on('end',()=> {
//buffer'ı stringe çeviriyoruz
const bodyParsed = Buffer.concat(body).toString();
const message =bodyParsed.split('=')[1];
console.log(qs.parse(bodyParsed));
fs.writeFileSync('message.txt',message);
});



res.statusCode = 302; // yönlendirme kodudur
res.setHeader('Location','/');
return res.end();
}}


module.exports = routeHandler;