const allInController = require("./controller/controller");
const { stocks } = require("./database/database");
const {createProducts,display,findById,update,updateMany,remove} =allInController;

const product1 ={
    name:"j1",
    amount:23232,
    pricePerUnit:32,
}
const product2 ={
    name:"jumper",
    amount:22,
    pricePerUnit:2,
}
console.log("create new product ______________________________________________________")
createProducts(product1);
createProducts(product2);
console.log("display___________________________________________________________________")
display();
console.log("find by id _________________________________________________")
findById(1);
console.log("update product_________________________________________________________")
update(1,"name","name of product")
console.log("update may _____________________________________________________________")
const update1 ={
    name:"dskfjkls",
    amount:142432,
    pricePerUnit:23423,
    totalPrice:2342
};
updateMany(1,update1);
console.log("remove _______________________________________________________________________")
remove(3);