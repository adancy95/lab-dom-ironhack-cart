
// grabs all of the prices on the page
let itemprice = document.querySelectorAll('.item > div:nth-child(2) > span');
let itemPriceArray = Array.from(itemprice);


//grabs all of the item totals after 
let itemTotal = document.querySelectorAll('.item > div:nth-child(4) > span'); 
let itemTotalArray = Array.from(itemTotal);


// grabs calculate button
let calBtn = document.getElementById('calculate-prices');

//grabs delete buttons
let delBtn = document.querySelectorAll('.btn-delete');

//grab the total of the cart
let cartTotal = document.querySelector('#total-price > span');


calBtn.onclick = function calPrice(){
  //grabs all of the quantities
   let qty = document.querySelectorAll('.qty');  
   let qtyArray = Array.from(qty)
    
   // returns the total price for each item on the corresponding line
   let itemRawPrice = itemPriceArray.map((eachPrice, index) => {
     
        let itemUnitPrice = parseFloat(eachPrice.innerHTML.substr(1));
        let itemTotalPrice = itemUnitPrice*parseInt(qty[index].value);
        itemTotalArray[index].innerHTML = `$${itemTotalPrice}.00`;
        return itemTotalPrice;
   });

   // returns the cart total
    let sum = itemRawPrice.reduce((accumlator, val) => accumlator + val);
    cartTotal.innerHTML = `$${sum}.00`;

}

 
// function deleteItem(e){

// }
  


























// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
