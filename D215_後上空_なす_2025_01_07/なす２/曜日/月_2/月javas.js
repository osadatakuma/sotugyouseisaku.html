const number1 = document.querySelector(".i");
const number2 = document.querySelector(".ii");
const number3 = document.querySelector(".iii");
const number4 = document.querySelector(".iiii");
const plusButton1 = document.querySelector("#increment1");
const plusButton2 = document.querySelector("#increment2");
const plusButton3 = document.querySelector("#increment3");
const plusButton4 = document.querySelector("#increment4");
const minusButton1 = document.querySelector("#minus1");
const minusButton2 = document.querySelector("#minus2");
const minusButton3 = document.querySelector("#minus3");
const minusButton4 = document.querySelector("#minus4");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

plusButton1.addEventListener("click", () => {
  count1++;
  number1.innerHTML = count1;
});

plusButton2.addEventListener("click", () => {
  count2++;
  number2.innerHTML = count2;
});

plusButton3.addEventListener("click", () => {
  count3++;
  number3.innerHTML = count3;
});

plusButton4.addEventListener("click", () => {
  count4++;
  number4.innerHTML = count4;
});

  minusButton1.addEventListener("click", () => {
    if(count1 >= 1) {
      count1 -= 1;
    }
    number1.innerHTML = count1;
  });

  minusButton2.addEventListener("click", () => {
    if(count2 >= 1) {
      count2 -= 1;
    }
    number2.innerHTML = count2;
  });

  minusButton3.addEventListener("click", () => {
    if(count3 >= 1) {
      count3 -= 1;
    }
    number3.innerHTML = count3;
  });

  minusButton4.addEventListener("click", () => {
    if(count4 >= 1) {
      count4 -= 1;
    }
    number4.innerHTML = count4;
  });