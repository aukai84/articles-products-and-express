
let productList = {};

function createID() {
  let ID = Math.floor(100000 + Math.random() * 900000);
  ID = ID.toString().substring(0,4);
  ID = parseInt(ID);
  return ID;
}

function getProductList() {
  return productList;
}

function storeProduct(product) {
  productList[product.id] = product;
}

function postIsValid(product) {
  if(product.hasOwnProperty('name') && product.hasOwnProperty('price') && product.hasOwnProperty('inventory')){
    if(isNaN(parseInt(product.name)) && typeof parseInt(product.price) === "number" && typeof parseInt(product.inventory) === "number"){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function putIsValid(product, addressID) {
  if(product.hasOwnProperty('id') && product.id === addressID && productList.hasOwnProperty(product.id)){
    return true;
  } else {
    return false;
  }
}

function deleteIsValid(address) {
  if(productList.hasOwnProperty(address)){
    return true;
  } else {
    return false;
  }
}

function updatePropertiesWith(product) {
  let targetID = product.id;
  if(product.hasOwnProperty('name')){
    productList[targetID].name = product.name;
  }
  if(product.hasOwnProperty('price')){
    productList[targetID].price = product.price;
  }
  if(product.hasOwnProperty('inventory')){
    productList[targetID].inventoryn = product.inventory;
  }
}


module.exports = {
  createID: createID,
  getProductList:getProductList,
  storeProduct: storeProduct,
  postValidator: postIsValid,
  putValidator: putIsValid,
  deleteValidator: deleteIsValid,
  updatePropertiesWith: updatePropertiesWith
};