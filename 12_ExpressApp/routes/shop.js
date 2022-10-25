const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

//her işlemde bu rout işlenir çünkü bu / url'si
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productid', shopController.getProduct);

router.get('/categories/:categoryid', shopController.getProductsByCategoryId);



router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

module.exports = router;
/*
her sayfanın title farklı olsun istiyorsak 
pug dosyasında title değişkeni tanımlayıp render'de ona atama yaparuz

rout yukarıdan aşağıya doğru çalışır
dinamik(değişkenle değişen linkler) linkleri normal linklerin altına al
*/