const number1 = document.querySelector(".invisible");
const plusButton1 = document.querySelector("#plus1");
const minusButton1 = document.querySelector("#minus1");

let count1 = 0;



plusButton1.addEventListener("click", () => {
  count1++;
  number1.innerHTML = count1;
});

  minusButton1.addEventListener("click", () => {
    if(count1 >= 1) {
      count1 -= 1;
    }
    number1.innerHTML = count1;
    remove();
  });