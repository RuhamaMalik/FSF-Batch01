// console.log(5 > 6); // false
// console.log(6 > 6); // false
// console.log(7 > 6); // true
// console.log('7' > 6); // true


// console.log(5 < 6); // true
// console.log('5' < 6); // true
// console.log(7 < 6); // false

/////// >=

// console.log(5 >= 5); // true
// console.log(7 >= 5); // true
// console.log('7' >= 5); // true
// console.log(4 >= 5); // false

/////////////// <=

// console.log(5 <= 6); // true
// console.log(5 <= 4); // false

/////////////////////// if else

//  if(condition){ // true
// }

// if (false) {
//   console.log('parathy le aao');
// }

// let isRain = false;

// if(isRain){
//   console.log('aalu k parathy le aao');
// }

// if(5 === 5){
// console.log('5 Equals to 5');
// }

// if('5' === 5){
// console.log('5 Equals to 5');
// }


// let email = 'abc@gmail.com';

// if (email == 'abc@gmail.com') {
//   console.log('signIn Successfully!');
// }
// else {
//   console.log('Invalid credentials!');
// }


// console.log(2 + 2); // 4
// console.log(2 - 1); // 1
// console.log(2 * 3); // 6
// console.log(2 ** 3); // 8 (** - exponent)
// console.log(10 / 2); // 5

// console.log(11 % 2); // 1

// console.log(14 % 2 === 0);


///////////////////////

let numInput = document.getElementById('xyz');
let h1 = document.getElementById('abcd');
let main = document.getElementById("main");

function checkNum() { // declare function
  //  console.log( Number(numInput.value));
  //  console.log(typeof Number(numInput.value));
  // console.log(numInput.value); // ""

  h1.style.backgroundColor ="";

  if (numInput.value == "") {
    // h1.innerHTML = '<hr><b>Hello</b>'
    h1.innerText = 'Number is Required!';
    h1.style.color = 'red';
    main.style.backgroundColor = 'aqua';
  } else if (Number(numInput.value) % 2 === 0) {
    h1.innerText = 'The Number is Even!';
    h1.style.color = 'green';
    main.style.backgroundColor = 'rgb(86, 204, 164)'
  } else {
    h1.innerText = 'The Number is Odd!';
    h1.style.color = 'yellow';
    h1.style.backgroundColor = 'black';
    main.style.backgroundColor = 'crimson';
  }






}

// checkNum(); /// call function
// checkNum(); /// call function
// checkNum(); /// call function
// checkNum(); /// call function

// if (5 % 2 === 0) {
//   console.log('The number is even');
// } else {
//   console.log('The number is odd');
// }