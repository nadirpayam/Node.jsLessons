
const express = require('express');
const router = express.Router();


//adres ekleme işlemi rout baştaki parametre adrestir


// '../' ile bir üst klasöre çıkıyoruz


const adminController = require('../controllers/admin');

router.get('/products', adminController.getProducts);

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products/:productid', adminController.getEditProduct);

router.post('/products', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;