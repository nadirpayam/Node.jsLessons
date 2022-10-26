const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const errorController = require('./controllers/errors');
const sequelize = require('./utility/database');

const Category = require('./models/category');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        })
});

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

Product.belongsTo(Category, { foreignKey: { allowNull: false } });
Category.hasMany(Product);

Product.belongsTo(User);
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

let _user;
sequelize
    //.sync({ force: true })
    .sync()
    .then(() => {

        User.findByPk(1)
            .then(user => {
                if (!user) {
                    return User.create({ name: 'sadikturan', email: 'email@gmail.com' });
                }
                return user;
            }).then(user => {
                _user = user;
                return user.getCart();
            }).then(cart => {
                if (!cart) {
                    return _user.createCart();
                }
                return cart;
            }).then(() => {
                Category.count()
                    .then(count => {
                        if (count === 0) {
                            Category.bulkCreate([
                                { name: 'Telefon', description: 'telefon kategorisi' },
                                { name: 'Bilgisayar', description: 'bilgisayar kategorisi' },
                                { name: 'Elektronik', description: 'elektronik kategorisi' }
                            ]);
                        }
                    });
            });
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});

/*

npm i express diyince kuruldu
wen framwork'udur express

*/

/*

middleware next-> next>res(yani işlem biter response gönderilir)
diyerek ardı ardına işlem yapabilmeyi sağlar
yani req-res arasında işlemler yapar
*/

/*
routing yani uygulamaya gelen url'de farklı url'ye farklı middleware'ler devreye sokma işlemi
sıra önemlidir hangi rout çalışacaksa başa o gelmeli yoksa önceki çalışır


*/

/*
 kullanıcıdan aldığımız bilgiui console'da göstemrek için
 npm i body-parser deriz

*/

/*
use kullanırsak url eşleşmesi olmasa bile anasayfaya yönlendirir
ancak get kullanınca url birebir eşleşmeli

*/

/*
npm install pug diyerek pug paketini dahil ettik
ve template-engine'de kullanacağız da
bu da diyelim bir data verdi kullanıcı ve dinamik siteye data kullanıldı bu işe yarıyor

app.set methodunu uygulama ayarları yapmak için kullanıyoruz
*/


// her html sayfasının bir pug'ı olmalı


/*
şimdi biz pug'larda kalıplarımız aynı sadece bazı yerleri değiştiriyoruz
her pug'da sayfa kodlarını tekrar yazmamak için layout'lar oluşturuyoruz
pug'lardaki farklılıkları entegre etmek için ise block'ları kullanıyoruz
yani layout kod tekrarını engeller

pug gelen verileriv html'e çevirip direkt kullanıcılara göstermeye yarar


*/


// include'u layout'lar çok karışık olmasın kısımlara bölelim diye oluşturduk

// bi methodun mixin olduğunu belirtmek için başına + ekliyoruz


/*
MVC bi design pattern'dır
model-contorellers-view kısımlarından oluşur



*/