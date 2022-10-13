/*var controllerB = (function(){
    //scope B
    var firstName = 'Nadir';

    var log = function(){
        console.log(this.firstName);
    }
        return {
            firstName,
            log
        }
})();


controllerA.log();
controllerB.log();*/

//nodejs

const scriptA = require('./scriptA'); //istediğimiz dosyaya ulaştık

scriptA.log('Doctor');
