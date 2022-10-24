const categories = [
    {id:"1", name:"Telefon", description:"Telefon kategori ürünleri"},
    {id:"2", name:"Bilgisayar", description:"Bilgisayar kategori ürünleri"},
    {id:"3", name:"Beyaz Eşya", description:"Beyaz Eşya kategori ürünleri"},
]


module.exports = class Category {
    constructor(name, description) {
        this.id = (categories.length+1).toString();
        this.name = name;
        this.description = description;
    }

    saveCategory() {
        categories.push(this); // this catori sınıfından bir obje yani 

    }

    static getAll() { // static olarak işaretledik çünkü sınıf üzerinden çağrılıyor, obje üzerinden değil
        return categories;
    }

    static geyById(id){
        return categories.find(i=>i.id===id);
    }

    static update(category) {
        //dışarıdan bir id gönderip o id ile içerdeki id'leri karşılaştırıyoruz
        const index = categories.findIndex(i=>i.id===category.id); // id eşleşmesi yapıyor 
        categories[index].name = categories.name;
        categories[index].description = categories.description;
    }

    static deleteById(id) {
        const index = categories.findIndex(i=>i.id ===id);
        categories.splice(index,1) // bu indexten itibareten 1 elemanı sil
    }
}