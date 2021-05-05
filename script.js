const resultElmnt = document.getElementById('result-col');
const option = document.getElementById('option');

function validationInput(number){
   if (number < 0){
      return 1;
   }else if(!(Number.isInteger(number))){
      return Math.round(number);
   }else {
      return number;
   }
}

function isPrimeFunc(num){
   let valNum = validationInput(num);
   let isPrime = true;
   if (valNum === 1) {
      resultElmnt.innerText = "1 is neither prime nor composite number.";
   }else if(valNum > 1){
      for (let i = 2; i < valNum; i++) {
         if (valNum % i == 0) {
            isPrime = false;
            break;
         }
      }
      isPrime ? resultElmnt.innerText = true : resultElmnt.innerText = false;
  }else {
     resultElmnt.innerText = false;
  }
}

function isFibonacciFunc(num) {
   let valNum = validationInput(num);
   function isSquare(n) {
      return n > 0 && Math.sqrt(n) % 1 === 0;
   }
   //A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square
   if (isSquare(5*(valNum*valNum)-4) || isSquare(5*(valNum*valNum)+4)) {
      resultElmnt.innerText = true;
   } else { resultElmnt.innerText = false; }
}

option.addEventListener('change', function(){
   const inputValue = document.getElementById('input').value;
   if(option.value === "isPrime"){
      console.log(inputValue);
      console.log(option.value);
      isPrimeFunc(inputValue);
   }else if(option.value === "isFibonacci"){
      console.log(inputValue);
      console.log(option.value);
      isFibonacciFunc(inputValue);
   }else {
      console.log('something wrong!');
   }
})
