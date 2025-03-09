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

const container =document.getElementById('phone-container');
phones.map((item)=>{
 const {brand, model, price, ram}=item;
    container.innerHTML += `
      <div class="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${brand}</h2>
              <h2 class="card-title">${model}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
    `
})