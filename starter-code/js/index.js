


  // grabs calculate button
  let calBtn = document.getElementById('calculate-prices');

  //grab the total of the cart
  let cartTotal = document.querySelector('#total-price > span');


calBtn.onclick = function calPrice(){

      // grabs all of the prices on the page
      let itemprice = document.querySelectorAll('.item > div:nth-child(2) > span');
      let itemPriceArray = Array.from(itemprice);
  
      //grabs all of the item totals after 
      let itemTotal = document.querySelectorAll('.item > div:nth-child(4) > span'); 
      let itemTotalArray = Array.from(itemTotal);
    
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




//grab create button
let createBtn= document.querySelector('#createBtn');
 createBtn.onclick = function addItem(){
    
    // Add new products to inventory
    let productName = document.getElementById('productName');
    let price = document.getElementById('price'); 

    //create the item div
    let div = document.createElement("div");
    
    //add the item class to the new item
    div.classList.add('item')

    //make html dom string
    let domString = `<div><span>${productName.value}</span></div><div><span>$${price.value}.00</span></div>
                     <div><label for="qty">QTY</label><input class="qty" name="qty"></div><div><span>$0.00</span></div>
                     <div><button class="btn btn-delete">Delete</button></div>`

    div.innerHTML = domString;
   
    let newItem = document.querySelector('.new-item');

    //adds the new item at the bottom of the list 
    newItem.before(div);

    //clears the input fields for the new product
    productName.value = '';
    price.value = '';

    //add delete event listener to newly created item 
    div.lastChild.firstChild.addEventListener('click', deleteItem)
 
 }


    function deleteItem(e){
      let itemToDel =  e.currentTarget.parentNode.parentNode;
      itemToDel.remove();
    }

 let delBtn = document.querySelectorAll('.btn-delete');
 let delBtnArray = Array.from(delBtn)
 
 for(const delButton of delBtnArray){
   delButton.addEventListener('click', deleteItem);
  }
 




