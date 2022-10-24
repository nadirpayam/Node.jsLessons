const Product = require('../models/product');
const Category = require('../models/category');


exports.getProducts = (req, res, next) => {
    const products = Product.getAll(); // listeyi sunar
    res.render('admin/products', {
        title: 'Admin Products',
        products: products,
        path: '/admin/products',
        action: req.query.action // query linkin sonundaki query string parametresini verir
    });
}

exports.getAddProduct = (req, res, next) => {
    const categories = Category.getAll();
    res.render('admin/add-product', {
        title: 'New Product',
        path: '/admin/add-product', // viewss klasöründeki pug dosyaasını kullanıcıya gönderiyor
        categories: categories
    });
}

exports.postAddProduct = (req, res, next) => { // get ve post da çalıştu use'da sadece post'da çalışması için use yerine post kullandık
    const product = new Product();

    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.categoryid = req.body.categoryid;
    product.description = req.body.description; //modelsteki product

    product.saveProduct();
    res.redirect('/');
}

exports.getEditProduct = (req, res, next) => {

    const product = Product.getById(req.params.productid);
    const categories = Category.getAll();

    res.render('admin/edit-product', {
        title: 'Edit Product',
        path: '/admin/products',
        product: product,
        categories: categories// viewss klasöründeki pug dosyaasını kullanıcıya gönderiyor
    });
}
 
exports.postEditProduct = (req, res, next) => {// get ve post da çalıştu use'da sadece post'da çalışması için use yerine post kullandık

    const product = Product.getById(req.body.id); // güncellenecek olan bilgiyi alıyoruz

    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryid = req.body.categoryid;

    Product.Update(product);
    res.redirect('/admin/products?action=edit');//kullanıcıyı adrese yönlendirdik
}

exports.postDeleteProduct = (req,res,next) => {
    Product.DeleteById(req.body.productid);
    res.redirect('/admin/products?action=delete');
}