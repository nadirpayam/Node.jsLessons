const express = require('express');
const router = express.Router();

const path = require('path');


//  /admin/add-product => GET
//adres ekleme işlemi rout baştaki parametre adrestir
router.get('/add-product',(req,res,next)=> {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});
//  /admin/add-product => POST
router.post('/add-product', (req,res,next)=>{ // get ve post da çalıştu use'da sadece post'da çalışması için use yerine post kullandık
  
   //databanse kayıt işlemleri de yapılabilir
   console.log(req.body);
   res.redirect('/'); //kullanıcıyı adrese yönlendirdik
});

module.exports = router;

// '../' ile bir üst klasöre çıkıyoruz