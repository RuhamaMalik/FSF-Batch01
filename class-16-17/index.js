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

let _num = document.getElementById('number');
let _start = document.getElementById('start');
let _end = document.getElementById('end');
let box = document.getElementById('box');


let num = Number(_num.value);
let start = Number(_start.value);
let end = Number(_end.value);

function printTable() {
  // console.log(typeof  num.value);
  // console.log(start);
  // console.log(end.value);

  // if(num.value===""){

  if (!num || !start || !end) {
    alert("All Inputs are required!")
  }
  else if (start > end) {
    alert('please Enter correct value!')
  }
  else {
    let html = ``;
    for (let i = start; i <= end; i++) {
      html += `<h3>${num} X ${i} = ${num * i}</h3>`;
    }

    box.innerHTML = html;

  }



}


// var i = 1

// i++; // i = i+1
// i++;
// i++;

// console.log(i); // 4
