const phones = [
    {     
        brand: 'Samsung',
        model: 'Galaxy S23',
        price: 900,
        ram: '8GB',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' 
    },
    {    
        brand: 'Apple', 
        model: 'iPhone 15', 
        price: 1200,
        ram: '6GB',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' 
    },
    {    
        brand: 'OnePlus', 
        model: 'OnePlus 12', 
        price: 800,
        ram: '12GB',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' 
    },
    {      
        brand: 'Xiaomi',
        model: 'Redmi Note 12',
        price: 300,
        ram: '6GB',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' // 
    },
    {   
        brand: 'Google', 
        model: 'Pixel 8', 
        price: 1000, 
        ram: '8GB',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' 
    },
    {   
        brand: 'Realme', 
        model: 'Realme GT 5', 
        price: 450, 
        ram: '8GB',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' 
    }
];

const container = document.getElementById('phone-container');

phones.map((item) => {
    const { brand, model, price, ram, image } = item;
    container.innerHTML += `
      <div class="card bg-base-100 w-full shadow-sm">
            <figure>
              <img src="${image}" alt="${brand} ${model}" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${brand}</h2>
              <h2 class="card-title">${model}</h2>
              <p>Price: $${price}, RAM: ${ram}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
      </div>
    `;
});
