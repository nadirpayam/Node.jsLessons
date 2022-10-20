const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);

console.log("Listenin port on 3000...");



/*
script'ler dreamveawer'deki template'ler mantuğında
kodu yazmana gerek yok çağırıyor method gibi

herhangi birdeğişiklik yaptığımızda otomatik olarak algılanması için
npm install nodemon deriz sadece uygulama yazarken kullanılır

*/