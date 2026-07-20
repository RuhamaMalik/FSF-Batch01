const products = [
  {
    id: 1,
    name: "Kids Teddy Bear",
    price: 19.99,
    description: "Soft and cuddly teddy bear made with premium plush fabric.",
    image: "https://images.unsplash.com/photo-1558239284-8f43c7c0f5f6?w=500"
  },
  {
    id: 2,
    name: "Remote Control Racing Car",
    price: 39.99,
    description: "Fast RC racing car with rechargeable battery and remote control.",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500"
  },
  {
    id: 3,
    name: "Kids Sports Shoes",
    price: 34.99,
    description: "Comfortable lightweight running shoes for active kids.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 4,
    name: "Building Blocks Set",
    price: 24.99,
    description: "Colorful educational building blocks for creative play.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500"
  },
  {
    id: 5,
    name: "Kids Backpack",
    price: 29.99,
    description: "Cute school backpack with adjustable shoulder straps.",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500"
  },
  {
    id: 6,
    name: "Toy Dinosaur",
    price: 14.99,
    description: "Realistic dinosaur toy for fun and educational playtime.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500"
  },
  {
    id: 7,
    name: "Kids Bicycle Helmet",
    price: 27.99,
    description: "Safety helmet with adjustable straps for kids.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500"
  },
  {
    id: 8,
    name: "Plush Bunny",
    price: 18.99,
    description: "Adorable bunny plush toy for children of all ages.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500"
  },
  {
    id: 9,
    name: "Kids Sandals",
    price: 22.99,
    description: "Comfortable and durable sandals for everyday wear.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
  },
  {
    id: 10,
    name: "Toy Kitchen Set",
    price: 44.99,
    description: "Complete pretend play kitchen set with accessories.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031d4f7?w=500"
  },
  {
    id: 11,
    name: "Kids Soccer Ball",
    price: 16.99,
    description: "Lightweight football designed for young players.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500"
  },
  {
    id: 12,
    name: "Toy Train Set",
    price: 49.99,
    description: "Classic train set with tracks and multiple coaches.",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=500"
  },
  {
    id: 13,
    name: "Kids Hoodie",
    price: 31.99,
    description: "Warm cotton hoodie with fun cartoon print.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
  },
  {
    id: 14,
    name: "Toy Robot",
    price: 36.99,
    description: "Interactive robot with lights, sounds, and movement.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500"
  },
  {
    id: 15,
    name: "Kids Sneakers",
    price: 42.99,
    description: "Trendy sneakers with soft cushioning and durable sole.",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500"
  },
  {
    id: 16,
    name: "Stuffed Panda Toy",
    price: 21.99,
    description: "Cute stuffed panda made from ultra-soft plush material.",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500"
  }
];


let container = document.getElementById('xyz');
let html = '';

for(let i=0; i<products.length; i++){
    html += `
    <div class="card">
   
    <img src="${products[i].image}" alt="">

    <div class="content">
      <p class="price">$ ${products[i].price}</p>
      <h3> ${products[i].name} </h3>
      <p class="desc"> ${products[i].description.slice(0,56)} </p>
      <button>Order Now</button>
    </div>

  </div>
    
    `
}


container.innerHTML = html;

