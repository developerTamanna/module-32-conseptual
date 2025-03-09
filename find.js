numbers = [1,,4,5,8,9];
const findEven = numbers.find(num=> num%2===0)
// console.log(findEven)


//? next: object find

const phones = [
    {     brand: 'Samsung',
          model: 'Galaxy S23',
          price: 900,
          ram: '8GB' },

    {    brand: 'Apple', 
         model: 'iPhone 15', 
         price: 1200,
         ram: '6GB' },

    {    brand: 'OnePlus', 
         model: 'OnePlus 12', 
         price: 800,
         ram: '12GB' },

    {      brand: 'Xiaomi',
           model: 'Redmi Note 12',
           price: 300,
           ram: '6GB' },

    {   brand: 'Google', 
        model: 'Pixel 8', 
        price: 1000, 
        ram: '8GB' },

    {   brand: 'Realme', 
        model: 'Realme GT 5', 
        price: 450, 
        ram: '8GB' }
];

// console.log(phones);
console.log(phones.find(phone=> phone.price <=999))
