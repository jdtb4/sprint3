// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
/*document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})
const fetchData= async() => {
  try {
    const res= await fetch('api.json')
    const data= await res.json()
  } catch (error) {
    console.log(error)
  }
}*/
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  
    for(i= 0; i < products.length; i++){ // 1. Loop for to the array products to get the item to add to cart
      if(id == products[i].id){
        cartList.push(products[i]); // 2. Add found product to the cartList array
      }
      num.innerHTML= cartList.length;
    }
    console.log(cartList);
}
const num= document.getElementById("count_product")


// Exercise 2
function cleanCart() {
  cartList.length= 0;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  
  for(i= 0; i < cartList.length; i++){
    total += (cartList[i].price);
  }
  console.log(total);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  for(i= 0; i <cartList.length; i++){
    let cartProduct = cart.indexOf(cartList[i]); 

    if(cartProduct === -1){ //If the array is empty of items.
      cart.push(cartList[i]); //Push the cartList itmes in.
      cart[cart.length -1].quantity = 1; //if non-exist, the quantity is 1.
      cart[cart.length -1].subtotal = cartList[i].price;
    }else{
      cart[cartProduct].quantity++; //Sum 1 to quantity if the item exist.
      cart[cartProduct].subtotal += cartList[i].price;
    }
    
  }
  console.log(cart);
  applyPromotionsCart()
  calculateTotal()
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

  for(j= 0; j < cart.length; j++){
    if(cart[j].id === 1 && cart[j].quantity >= 3){
      cart[cart.id == 1].price = 10;
      
    }
    if(cart[j].id === 3 && cart[j].quantity >= 10){
      (cart[cart.id ===3].price * 2) /3; 

    }
  }

}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
