function checkLenght() {
  let pwd = document.getElementById('pwd').value;

  if(pwd.length < 10){
    document.getElementById('spanpwd1').innerHTML = "The password is too short!";
  }else document.getElementById('spanpwd1').innerHTML = "";
}
function comparePwd() {
  let pwd1 = document.getElementById('pwd').value;
  let pwd2 = document.getElementById('reppwd').value;
  if(pwd1 != pwd2){
    document.getElementById('spanpwd2').innerHTML = "The passwords are not the same!";
  } 
  else document.getElementById('spanpwd2').innerHTML = "";
}