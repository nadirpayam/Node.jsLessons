const express = require('express');
const router = express.Router();

const admin = require('./admin');


//her işlemde bu rout işlenir çünkü bu / url'si
router.get('/',(req,res,next)=> {
   res.render('index',{
      title:'Homepage',products: admin.products,
      path:'/'
   }); 
});


module.exports = router;

/*
her sayfanın title farklı olsun istiyorsak 
pug dosyasında title değişkeni tanımlayıp render'de ona atama yaparuz


*/