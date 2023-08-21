class ProductManager {
    constructor(){
        this.products = []
    }

    addProduct(title,description,price,thumbnail,code, stock){
        const idProduct = this.products.length + 1
        const codeEncontrado = this.products.find(producto => code===producto.code)
        if (codeEncontrado){
            console.log("Producto con code proporcionado ya existe")
            return
        }

        const producto = {
            id: idProduct,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if ( Object.values(producto).includes(undefined) ){
            console.log("Faltan datos")
            return
        }
        this.products.push(producto)
    }
    getProducts(){
        return this.products
    }
    getProductById( idProduct ){
        const productFound = this.products.find(producto => idProduct===producto.id)
        productFound ? console.log(productFound) : console.error("NOT FOUND")
    }
}
const productManager = new ProductManager()

productManager.addProduct("Iphone 14" , "Iphone blanco 14 256GB" , 2500,  "./img/iphone14", "IP14" , 10)
productManager.addProduct("Iphone 13" , "Iphone negro 13 128GB" , 1800,  "./img/iphone13","IP13", 5)
productManager.addProduct("Iphone 12" , "Iphone rose 12 256GB" , 1500,   "./img/iphone12", "IP12", 15)

console.log(productManager.getProducts())
productManager.getProductById(5)



