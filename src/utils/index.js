//Helpers page

const CART_KEY = 'cart';



//calculate price
export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    /*In JavaScript, toFixed() is a Number method that is used to convert a number to fixed-point
    notation (rounding the result where necessary) and return its value as a string.*/
    .toFixed(2)
  }`
}

//Persisting cart even if we refresh using local storage
export const setCart = (value, cartKey = CART_KEY) => {
  if(localStorage){
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
}
export const getCart = (cartKey = CART_KEY) => {
  if(localStorage && localStorage.getItem(cartKey)){
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
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