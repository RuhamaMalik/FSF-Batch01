////////////////// Loop


// console.log('Ruhama');
// console.log('Ruhama');
// console.log('Ruhama');
// console.log('Ruhama');
// console.log('Ruhama');


//////////////////////// for loop

// for (initialization; condition; updation){
// }


// for (var i=1; i<=5; i += 1){


//           6
// for (var i = 1; i <= 5; i++) {
//   console.log('Ruhama! ', i); // 1 2 3 4 5
// }



//////////////////// even


// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//         console.log(`${i} is Even`);
//   }
// }


//////////////////// odd

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(`${i} is Odd`);
//   }
// }

////////////////////   Table



// for (let i = 1; i <= 13; i++) {
//   console.log(`7 X ${i} = ${7 * i}`);
// }

// let _num = document.getElementById('number');
// let _start = document.getElementById('start');
// let _end = document.getElementById('end');
// let box = document.getElementById('box');


// let num = Number(_num.value);
// let start = Number(_start.value);
// let end = Number(_end.value);

// function printTable() {
//   // console.log(typeof  num.value);
//   // console.log(start);
//   // console.log(end.value);

//   // if(num.value===""){


//   if (!num || !start || !end) {
//     alert("All Inputs are required!")
//   }
//   else if (start > end) {
//     alert('please Enter correct value!')
//   }
//   else {
//     let html = ``;
//     for (let i = start; i <= end; i++) {
//       html += `<h3>${num} X ${i} = ${num * i}</h3>`;
//     }

//     box.innerHTML = html;

//   }



// }


// var i = 1

// i++; // i = i+1
// i++;
// i++;

// console.log(i); // 4



/////////////////////////// for loop

// let fruits = ['apple', 'mango', 'banana', 'strawberry', 'cherry'];

// // console.log(fruits[0]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`My Fav Fruit name is ${fruits[i]}`);
// }

///////////////////////////////////////

// let colours = ['red','orange','blue','purple','black'];

// for(let i=0; i < colours.length; i++){
//     console.log(`Colour:  ${colours[i]}!`);
    
// }


// let users = [
//   {
//     id:1,
//     name:'Hoorain',
//     email:'hoorain@gmail.com'
//   },
//   {
//     id:2,
//     name:'Noor',
//     email:'noor@gmail.com'
//   },
//   {
//     id:3,
//     name:'Fatima',
//     email:'fatima@gmail.com'
//   }
// ]


// for(let i=0; i<users.length; i++){
// console.log(users[i].id);
// // if(i === 1 || i===0){
// //   console.log(users[i].name);
// // }
// }



const products = [
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    price: 9.99,
    description: "Volumizing and lengthening mascara with a long-lasting, cruelty-free formula.",
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    price: 19.99,
    description: "Versatile eyeshadow palette with a built-in mirror for easy makeup application.",
    image: "https://pierrecardin.pk/cdn/shop/files/MOCCAA.png?v=1783057731"
  },
  {
    id: 3,
    name: "Powder Canister",
    price: 14.99,
    description: "Lightweight setting powder that controls shine and provides a matte finish.",
    image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
  },
  {
    id: 4,
    name: "Red Lipstick",
    price: 12.99,
    description: "Classic red lipstick with a creamy, pigmented, and long-lasting formula.",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
  },
  {
    id: 5,
    name: "Red Nail Polish",
    price: 8.99,
    description: "Glossy red nail polish with a quick-drying, salon-quality finish.",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
  },
  {
    id: 6,
    name: "Calvin Klein CK One",
    price: 49.99,
    description: "Fresh and clean unisex fragrance suitable for everyday wear.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
  },
  {
    id: 7,
    name: "Chanel Coco Noir Eau De",
    price: 129.99,
    description: "Elegant fragrance with notes of grapefruit, rose, and sandalwood.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
  },
  {
    id: 8,
    name: "Dior J'adore",
    price: 89.99,
    description: "Luxury floral fragrance with rose, jasmine, and ylang-ylang.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp"
  },
  {
    id: 9,
    name: "Dolce Shine Eau de",
    price: 69.99,
    description: "Fruity fragrance featuring mango, jasmine, and blonde woods.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp"
  },
  {
    id: 10,
    name: "Gucci Bloom Eau de",
    price: 79.99,
    description: "Modern floral fragrance with tuberose, jasmine, and Rangoon creeper.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp"
  },
  {
    id: 11,
    name: "Annibale Colombo Bed",
    price: 1899.99,
    description: "Luxury bed frame made with premium materials for maximum comfort.",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp"
  },
  {
    id: 12,
    name: "Annibale Colombo Sofa",
    price: 2499.99,
    description: "Premium sofa offering comfort and elegant living room design.",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
  },
  {
    id: 13,
    name: "Bedside Table African Cherry",
    price: 299.99,
    description: "Stylish bedside table with practical storage and elegant design.",
    image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp"
  },
  {
    id: 14,
    name: "Knoll Saarinen Executive Conference Chair",
    price: 499.99,
    description: "Modern ergonomic office chair with a timeless conference-room design.",
    image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp"
  },
  {
    id: 15,
    name: "Wooden Bathroom Sink With Mirror",
    price: 799.99,
    description: "Stylish wooden bathroom sink with a matching mirror.",
    image: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp"
  },
  {
    id: 16,
    name: "Apple",
    price: 1.99,
    description: "Fresh and crisp apples, perfect for snacks and recipes.",
    image: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
  }
];

let html = '';

let container = document.getElementById('xyz');

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

