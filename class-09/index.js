let fruits = ['apple', 'mango', 'water-melon', 'strawberry', 'lichi'];

// length : 5 - start from 1 - no of elements
// index : 4 - start from 0 -  position of an element

// console.log(fruits); // all elements
// console.log(fruits[1]); // mango
// console.log(fruits[4]); // lichi
// console.log(fruits[fruits.length-1]); // lichi
// console.log(fruits[fruits.length-2]); // strawberry
// console.log(fruits.length); // 5


///////////////// object

// obj ={
//   key:'value',
//   propertyName : propertyValue
// }


let user = {
  name:'Dua',
  email : 'dua@gmail.com',
  isActive:true
}

// console.log(user);
// console.log(user.name); // Dua
// console.log(user.email);


let user2 = {
  name:'Fatima',
  email:'fatima@gmail.com',
  isActive:true,
  hobbies:['reading','swiming','baking'], // user2.hobbies[2]
  addresss: {
    zipcode:11111,
    city:'karachi', // user2.addresss.city
    street:'street 1'
  }
}

// console.log(user2.hobbies[2]);
console.log(user2.addresss.city);

let user3 = {
  name :'Hira',
  email:'hira@gmail.com',
  isActive:false,
  contact:8382983293
}

// [{},{},{}] -- array of obj

let users = [
  user,
  user2,
  user3
]

// console.log(users);
