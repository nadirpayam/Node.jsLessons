/*  -- 3.slayt 25.sayfa--
var fs = require("fs"); 
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");  
*/

/* -- 3.slayt 26.sayfa --
var fs = require("fs");
fs.readFile('input.txt', function(err,data) {
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");
*/

/* -- 3.slayt 27.sayfa --
var events = require('events');
 
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connection succesful.');
        //emit olayı tetikler
    eventEmitter.emit('data_received');
}
  // on fonksiyonu olayı tanımlamaya yarar
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended");
*/

/* -- 3.slayt 28.sayfa --
buf = new Buffer(26);
for(var i = 0 ; i < 26 ; i++) { 
    buf[i] = i + 97; // ascii'de 97 sonrası küçük harflerdir
}

console.log( buf.toString('ascii')); 
console.log( buf.toString('ascii',0,5));
console.log( buf.toString('utf-8',0,5));
console.log( buf.toString(undefined, 0,5));

var buffer1 = new Buffer('Nadir');
var buffer2 = new Buffer('Cem');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer2 content: " + buffer3.toString());

var result = buffer1.compare(buffer2);

if(result<0) {
    console.log(buffer1 + " comes before " + buffer2);
}
else if(result==0) {
    console.log(buffer1 + " is same as " + buffer2);
}
else {
    console.log(buffer1 + " comes after " + buffer2);
}
*/

/*  --3.slayt 29.sayfa --
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('inpt.txt');


readerStream.setEncoding("UTF8");
//asenkron çalışıyor alt satırdaki data'ya ekleme yapıyor sonra input içindekini okuyor
readerStream.on('data', function(chunk) {
    data+=chunk;
});

readerStream.on('end',function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

var data = 'FALL 2019,'

var writerStream = fs.createWriteStream('output.txt');
*/

/* --3.slayt 30.sayfa --
var fs = require("fs");

fs.readFile("output.txt", function(err,data) {
    if(err) {
        return console.error(err);
    }
    console.log("Asynchrous read:" + data.toString());
});

var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

fs.stat("input.txt" , function(err,stats) {
    if(err) {
        return console.log(err);
    }
    console.log(stats);
    console.log("Got file info succesfuly");

    console.log("isFile?" + stats.isFile());
    console.log("isDirectory? " + stats.isDirectory());
});

console.log("program ended");
*/

/* --3.slayt 31.sayfa --
function printHello(){
    console.log("Hello World");
}

setTimeout(printHello, 2000);

setInterval(printHello, 2000);

*/

/*
npm init > dedik ve npm package.json dosyası indi
asenkron türde okuma işlemi: bir iş yapılırken başka işler de varsa onlar da yapılır
senkron türde okuma işlemi: o iş bitene kadar başka iş yapma
-fs modülü dosya ve klasör işlemleri yapar
- readFile asenkron okur, readFileSync senkron okur
-senkron'da var data demelisin, asenkronda belirtmene gerek yok

-buffer harfleri sayıya çevirir

-stream parça parça yüklemeye yarar
-stats dosyanın bilgilerini json olarak döndürüuor

setTimeout fonksiyonu belirli bir zaman sonra çalıştırmaya yarar.
setInterval fonksiyonun belirli aralıklar ile sürekli çalışmasını sağlar.
*/