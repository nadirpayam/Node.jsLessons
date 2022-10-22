const express = require('express');
const router = express.Router();

const products = [
   {name: 'Samsung S8', price: 3000, image:'1.jpg' ,description:'İyi telefon'},
   {name: 'Xiaomi', price: 3000, image:'2.jpg' ,description:'İyi telefon'},
   {name: 'Iphone', price: 3000, image:'3.jpg' ,description:'İyi telefon'},
   {name: 'Huwai', price: 3000, image:'4.jpg' ,description:'İyi telefon'}
  ];


//  /admin/add-product => GET
//adres ekleme işlemi rout baştaki parametre adrestir
router.get('/add-product',(req,res,next)=> {
   res.render('add-product',
   {
      title:'Add a New Product',
      path: '/admin/add-product'
   }); // viewss klasöründeki pug dosyaasını kullanıcıya gönderiyor
});
//  /admin/add-product => POST
router.post('/add-product', (req,res,next)=>{ // get ve post da çalıştu use'da sadece post'da çalışması için use yerine post kullandık
  
   //databanse kayıt işlemleri de yapılabilir
   products.push({name:req.body.name, price: req.body.price, image: req.body.image, description: req.body.description});
   res.redirect('/'); //kullanıcıyı adrese yönlendirdik
});

exports.routes = router;
exports.products = products;

// '../' ile bir üst klasöre çıkıyoruz