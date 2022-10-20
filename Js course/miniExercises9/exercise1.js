function divide() {
  let fNum = document.getElementById('firstNum').value;
  let sNum = document.getElementById('secondNum').value;
  let result = fNum/sNum;  
  document.getElementById('result').innerHTML = "Result: " + result;
}
function multiply() {
  let fNum = document.getElementById('firstNum').value;
  let sNum = document.getElementById('secondNum').value;
  let result = fNum*sNum;
  document.getElementById('result').innerHTML = "Result: " + result;
}