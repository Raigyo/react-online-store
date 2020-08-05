//Helpers page

const CART_KEY = 'cart';
const TOKEN_KEY = 'jwt';


//calculate price
export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    /*In JavaScript, toFixed() is a Number method that is used to convert a number to fixed-point
    notation (rounding the result where necessary) and return its value as a string.*/
    .toFixed(2)
  }`
}


//CART
//Persisting cart even if we refresh using local storage
//Set
export const setCart = (value, cartKey = CART_KEY) => {
  if(localStorage){
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
}
//Get
export const getCart = (cartKey = CART_KEY) => {
  if(localStorage && localStorage.getItem(cartKey)){
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};
//Clear cart
export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey);
  }
}

//Auth - JSON Web Tokens
//Set
export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};
//Get
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null;
};
//Clear cart
export const clearToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
  }
}

/*
//Array.reduce()

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

*/