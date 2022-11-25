/* --Slayt4 42--
const execFile=require('child_process').execFile;
const child=execFile('node',['--version'],(error,stdout,stderr)=>{
    if(error){
        console.error('stderr',stderr);
        throw error;
    }
    console.log('stdout',stdout);
});
*/

/* --Slayt4 43--
const fs = require("fs");
const child_process = require("child_process");

for(var i = 0 ; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js',i]);

    workerProcess.stdout.on('data', function(data) {
        console.log("stdout: " + data);
    });
    workerProcess.stderr.on('data', function(data) {
        console.log("stderr: " + data);
    });
    workerProcess.on('data', function(code) {
        console.log("child process exited with code: " + code);
    });
}
*/

const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i<3; i++) {
    var workerProcess = child_process.spawn('node',['support.js',i]);

    workerProcess.stdout.on('data',function(data){
          console.log('stdout: ' + data);
    });
    workerProcess.stderr.on('data',function(data){
        console.log('stderr: ' + data);
    });
    workerProcess.stdout.on('close',function(code){
        console.log('child process exited with code: ' + code);
    });
}






/*
child_process modülü alt process ler oluşturmamızı sağlar. Bu NodeJS içerisinden
 komut satırı üzerinde bazı işlemler yapabileceğimiz anlamına gelir.



*/