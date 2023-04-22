var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var email=document.getElementById('email');
var pass=document.getElementById('password');
var emailError= document.getElementById('email-error');
var passError= document.getElementById('password-error');
var btn = document.getElementById('btn-send');
var flagToLoginEmail=false;
var flagToLoginPass=false;

email.addEventListener('blur', emailValidation);
email.addEventListener('focus', emailChanging);
pass.addEventListener('blur', passValidation);
pass.addEventListener('focus', passChanging);
btn.addEventListener('click', login)

function emailValidation(){
   if (!(emailExpression.test(email.value)) && email.value.length !== 0) {
      emailError.classList.add('box-error');
      email.style.border='2px solid red';
      emailError.textContent='e-mail address is wrong, try again';
   }else{
      flagToLoginEmail=true;
   }
}
function emailChanging(){
   emailError.classList.remove('box-error');
   emailError.textContent="";
   email.style.border='1px solid #5a5656';
}
function passValidation(){
   var passwordControls = pass.value;
   if ( !deeperValidation(passwordControls) && passwordControls.length !== 0) {
      passError.classList.add('box-error');
      pass.style.border='2px solid red';
      passError.textContent='password has to be at least 8 character long and it has to be composed by one number and one letter';
   }else{
      flagToLoginPass=true;
   }
}
function deeperValidation(password){
   flag=false;
   if(password.length >= 8){
      if (hasANumber(password) && hasALetter(password)) {
         flag=true;
      }
   }
   return flag;
}
function hasANumber(password){
   var flag=false;
   for (let i = 0; i < password.length; i++) {
      if(!isNaN(password[i])){
        flag=true;
        break;
      }
   }
   return flag;
}
function hasALetter(password){
   var flag=false;
   for (let i = 0; i < password.length; i++){
      if (password[i].toLowerCase() >= 'a' && password[i].toLowerCase() <= 'z' ) {
         flag=true;
         break;
      } 
   }
   return flag;
}
function passChanging(){
   passError.classList.remove('box-error');
   passError.textContent="";
   pass.style.border='1px solid #5a5656';
}
function login(e){
   if(flagToLoginEmail && flagToLoginPass){
      alert('Email: '+ email.value+'\nPassword: ********');
   }else{
      e.preventDefault();
      alert("Something's wrong. Check your email and password again");
   }
}