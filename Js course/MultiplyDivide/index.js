window.onload = () => {
  console.log(document.getElementsByClassName("multiply"));
  const multiplybutton = document.getElementsByClassName("multiply");
  multiplybutton.addEventListener(
    "click",
    (multiplyBy = () => {
      console.log("multiply");
      num1 = document.getElementById("firstNumber").value;
      num2 = document.getElementById("secondNumber").value;
      document.getElementById("result").innerHTML = num1 * num2;
    })
  );

  console.log(document.getElementsByClassName("divide"));
  const dividebutton = document.getElementsByClassName("divide");
  dividebutton.addEventListener(
    "click",
    (divideBy = () => {
      console.log("multiply");
      onsole.log("divide");
      num1 = document.getElementById("firstNumber").value;
      num2 = document.getElementById("secondNumber").value;
      document.getElementById("result").innerHTML = num1 / num2;
    })
  );
};

