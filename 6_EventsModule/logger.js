const EventEmitter = require('events');
//EventEmitter aslında bir classtır bunu kullanabilmek için obje türetiriz

class Logger extends EventEmitter{ // olay özelliğini class'a aktardık
    log(message) {
        console.log(message);
    
        //event'i tetikle
    //emit metodu event'i tetiklemeye yarıyorz
    
    this.emit('connection',{id:1,message:'Hello'});
    }
}



//logger.js'i başka yerde kullanmak için modüle atıyoruz

module.exports = Logger;