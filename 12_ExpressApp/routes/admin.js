const express = require('express');
const router = express.Router();



//adres ekleme işlemi rout baştaki parametre adrestir

const adminController = require('../controllers/admin');
router.get('/products', adminController.getProducts); // büytün ürün bilgilerini getirir

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);
// /admin/products/22989 
router.get('/products/:productid', adminController.getEditProduct);

router.post('/products', adminController.postEditProduct);

router.post('/delete-product',adminController.postDeleteProduct)

module.exports = router;

// '../' ile bir üst klasöre çıkıyoruz