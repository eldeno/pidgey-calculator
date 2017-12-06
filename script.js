let resultFinal = document.querySelector('#result');
let candyRemainder = document.querySelector('#resto');
let pidgeyTransfer = document.querySelector('#transfer');
const btn = document.querySelector('#btn-calculate');

btn.addEventListener('click', function() {
  /*let pidgeyNumber = document.getElementById('pidgeynumber').value;
  let candyNumber = document.getElementById('candynumber').value;
  console.log(candyNumber);
  console.log(pidgeyNumber);
  let result = candyNumber / pidgeyNumber;
  console.log(parseInt(result));
  resultFinal.innerText = parseInt(result);
  return resultFinal;*/
  let candyNumber = document.getElementById('candynumber').value;
  let pidgeyNumber = document.getElementById('pidgeynumber').value;
  
  let candyNumberTotal = parseInt(candyNumber) + parseInt(pidgeyNumber);
  console.log(candyNumberTotal);
  
  let c1 = Math.floor(candyNumberTotal / 12);
  let c2 = Math.floor(candyNumberTotal % 12);
  // console.log(p1 + p2);
  let c3 = Math.floor((c1 + c2) / 12);
  let resto = Math.floor((c1 + c2) % 12);
  let result = (c1 + c3);
 console.log (result);
   // Extra Pidgeys 
  let extraPidgeys;
 if (pidgeyNumber == result) {
    extraPidgeys = 0;
  } else if (pidgeyNumber < result) {
    extraPidgeys = "You don't have enough Pidgeys";
  } else {
    extraPidgeys = pidgeyNumber - result;
  };
 
  
  
  resultFinal.innerHTML = result;
  candyRemainder.innerHTML = resto;
  pidgeyTransfer.innerHTML = extraPidgeys;
});


                                            