var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var email=document.getElementById('email');
var emailError= document.getElementById('email-error');
var pass=document.getElementById('password');
var passError= document.getElementById('password-error');
var repeatPass=document.getElementById('password-confirmation');
var repeatPassError= document.getElementById('password-repeat-error');
var namee=document.getElementById('name');
var nameError=document.getElementById('name-error');
var surname=document.getElementById('surname');
var surnameError=document.getElementById('surname-error');

repeatPass.disabled=true;

email.addEventListener('blur', emailValidation);
email.addEventListener('focus', emailChanging);
pass.addEventListener('blur', passValidation);
pass.addEventListener('focus', passChanging);
repeatPass.addEventListener('blur', comparePasswords);
repeatPass.addEventListener('focus', repeatPassChanging);
namee.addEventListener('blur', nameValidation);
namee.addEventListener('focus', nameChanging);
surname.addEventListener('blur', surnameValidation);
surname.addEventListener('focus', surnameChanging);


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
        repeatPass.disabled=true;
        repeatPass.value='';
        passError.classList.add('box-error');
        pass.style.border='2px solid red';
        passError.textContent='password has to be at least 8 character long and it has to be composed by one number and one letter';
    }else if(passwordControls.length === 0){
        repeatPass.disabled=true;
        repeatPass.value='';
    }else{
        flagToLoginPass=true;
        repeatPass.disabled=false;
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
function comparePasswords(){
   if(!repeatPass.disabled){
         if(!(pass.value === repeatPass.value)){
            repeatPassError.textContent='both password must be the same';
            repeatPassError.classList.add('box-error');
            repeatPass.style.border='2px solid red';
         }
   }
}
function repeatPassChanging(){
   repeatPassError.classList.remove('box-error');
   repeatPassError.textContent="";
   repeatPass.style.border='1px solid #5a5656';
}
function nameValidation(){
   var cont=0;
   var flag=false;
   if(!hasANumber(namee.value)){
      for (let i = 0; i < namee.value.length; i++) {
         if (namee.value[i].toLowerCase() >= 'a' && namee.value[i].toLowerCase() <= 'z' ) {
            cont++;
            if(cont >=3){
               flag=true;
            }
         }else{
            nameError.textContent='Symbols are not allowed';
            nameError.classList.add('box-error');
            namee.style.border='2px solid red';
         }  
      }
   }else{
      nameError.textContent='Name cannot contain numbers';
      nameError.classList.add('box-error');
      namee.style.border='2px solid red';
   }
   if(!flag && cont!==0){
      nameError.textContent='Name has to be at least 3 characters long';
      nameError.classList.add('box-error');
      namee.style.border='2px solid red';
   }
}
function nameChanging(){
   nameError.classList.remove('box-error');
   nameError.textContent="";
   namee.style.border='1px solid #5a5656';
}

//

function surnameValidation(){
   var cont=0;
   var flag=false;
   if(!hasANumber(surname.value)){
      for (let i = 0; i < surname.value.length; i++) {
         if (surname.value[i].toLowerCase() >= 'a' && surname.value[i].toLowerCase() <= 'z' ) {
            cont++;
            if(cont >=3){
               flag=true;
            }
         }else{ 
            surnameError.textContent='Symbols are not allowed';
            surnameError.classList.add('box-error');
            surname.style.border='2px solid red';
         }  
      }
   }else{
      surnameError.textContent='Surname cannot contain numbers';
      surnameError.classList.add('box-error');
      surname.style.border='2px solid red';
   }
   if(!flag && cont!==0){
      surnameError.textContent='Surname has to be at least 3 characters long';
      surnameError.classList.add('box-error');
      surname.style.border='2px solid red';
   }
}
function surnameChanging(){
   surnameError.classList.remove('box-error');
   surnameError.textContent="";
   surname.style.border='1px solid #5a5656';
}

