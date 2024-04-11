const {stocks} = require("../database/database")

const createProducts = (newProduct) =>{
  newProduct.id = (stocks.length) +1
newProduct.totalprice =(newProduct.amount*newProduct.pricePerUnit)
  stocks.push(newProduct)
  console.log(stocks)
}

const display =() =>{
    console.log(stocks)
}

const findById = (id) =>{
    var foundedPrice = {}
    foundedPrice = stocks.find(foundedPrice =>foundedPrice.id ===id)
    if(foundedPrice){
        console.log(foundedPrice)
    }else{
        console.log("price does not exist");
    }

}

const update = (id,key,value) =>{
    var readToUpdate = []
    readToUpdate = stocks.find(readToUpdate =>readToUpdate === id)
    if(readToUpdate){
        readToUpdate[key] =value
        console.log(readToUpdate)
    }else{
        console.log("use does not exist")
    }
}

const updateMany = (id,object) =>{
    var readToUpdate = {}
    readToUpdate = stocks.find(readToUpdate =>readToUpdate.id ===id)
    if(readToUpdate){
        for(key in object){
            readToUpdate[key] = object[key]
        }
        console.log(readToUpdate)
    } else{
        console.log("product does not exist")
    }
}

const remove =(id) =>{
    var readToRemove = []
     readToRemove = stocks.find(readToRemove =>readToRemove.id === id)
     if(readToRemove){
        var remainingProduct ={}
        remainingProduct =stocks.filter(remainingProduct => remainingProduct.id !== id)
        console.log(remainingProduct)
     }else{
        console.log("product does not exist")
     }
}

 


module.exports ={createProducts,display,findById,update,updateMany,remove}