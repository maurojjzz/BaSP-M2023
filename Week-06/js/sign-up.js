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
var dni=document.getElementById('dni');
var dniError=document.getElementById('dni-error');
var birthDay=document.getElementById('birth');
var birthDayError=document.getElementById('birth-error');
var phone=document.getElementById('phone');
var phoneError=document.getElementById('phone-error');
var postCode=document.getElementById('postal-code');
var postCodeError=document.getElementById('postal-error');
var locali=document.getElementById('locali');
var localiError=document.getElementById('location-error');
var address=document.getElementById('address');
var addressError=document.getElementById('address-error');
var button = document.getElementById('btn-send');

birthDay.setAttribute('required',true);
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
dni.addEventListener('blur', dniValidation);
dni.addEventListener('focus', dniChanging);
birthDay.addEventListener('blur', birthValidation);
birthDay.addEventListener('focus', birthChanging);
phone.addEventListener('blur', phoneValidation);
phone.addEventListener('focus', phoneChanging);
postCode.addEventListener('blur', postCodeValidation);
postCode.addEventListener('focus', postCodeChanging);
locali.addEventListener('blur', locationValidation);
locali.addEventListener('focus', locationChanging);
address.addEventListener('blur', addressValidation);
address.addEventListener('focus', addressChanging);
button.addEventListener('click', register);

//to validate in register if pass all the validations
var finalAddressValidation=false;
var bothPasswordsValidation=false;
var flagToLoginEmail=false;
var flagNameRegister=false;
var flagSurnameRegister=false;
var finalDniValidation=false;
var finalPhoneValidation=false;
var finalLocationValidation=false;
var finalPostalCodeValidation=false;

function emailValidation(){
    if (!(emailExpression.test(email.value)) && email.value.length !== 0) {
       emailError.classList.add('box-error');
       email.style.border='2px solid red';
       emailError.textContent='e-mail address is wrong, try again';
    }else{
       flagToLoginEmail=true;
    }
 }
 //remove the styles while focus on the input who haven't pass validations
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
        passError.textContent='password has to be at least 8 character long and it '+
         +'has to be composed by one number and one letter';
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
 //verify if strings has any number and return true or false
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
 //verify if strings has any letter and if it isnt a symbol
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
   bothPasswordsValidation=false;
   if(!repeatPass.disabled){
         if(!(pass.value === repeatPass.value)){
            repeatPassError.textContent='both password must be the same';
            repeatPassError.classList.add('box-error');
            repeatPass.style.border='2px solid red';
         }else{
            bothPasswordsValidation=true;
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
   flagNameRegister=false;
   if(!hasANumber(namee.value)){
      for (let i = 0; i < namee.value.length; i++) {
         if (namee.value[i].toLowerCase() >= 'a' && namee.value[i].toLowerCase() <= 'z' ) {
            cont++;
            if(cont >=3){
               flagNameRegister=true;
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
   if(!flagNameRegister && cont!==0){
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

function surnameValidation(){
   var cont=0;
   flagSurnameRegister=false;
   if(!hasANumber(surname.value)){
      for (let i = 0; i < surname.value.length; i++) {
         if (surname.value[i].toLowerCase() >= 'a' && surname.value[i].toLowerCase() <= 'z' ) {
            cont++;
            if(cont >=3){
               flagSurnameRegister=true;
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
   if(!flagSurnameRegister && cont!==0){
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
function dniValidation(){
   var flagValidateLetter=false;
   finalDniValidation=false;
   //to validate if the string has a symbol or a letter
   if (!hasALetter(dni.value)) {
         for (let i = 0; i < dni.value.length; i++) {
            if (isNaN(dni.value[i])) {
               flagValidateLetter=false;
               break;
            }else{
               flagValidateLetter=true;
            }
         } 
   }else{
      dniError.textContent='other than numbers are not allowed in this input';
      dniError.classList.add('box-error');
      dni.style.border='2px solid red';
   }
   if(flagValidateLetter){
      if(!(dni.value.length >= 7)){
         dniError.textContent='dni needs to be at least 7 characters long';
         dniError.classList.add('box-error');
         dni.style.border='2px solid red';
      }else{
         finalDniValidation=true;
      }
   }else{
      if (dni.value.length !== 0) {
         dniError.textContent='other than numbers are not allowed in this input';
         dniError.classList.add('box-error');
         dni.style.border='2px solid red';
      }  
   }
}
function dniChanging(){
   dniError.classList.remove('box-error');
   dniError.textContent="";
   dni.style.border='1px solid #5a5656';
}
function birthValidation(){
   var today= new Date();
   var inputDate=new Date(birthDay.value);
   var birthValidated=false;
   if (birthDay.value === "") {
      birthDayError.textContent='this cannot be empty';
      birthDayError.classList.add('box-error');
      birthDay.style.border='2px solid red';
   }else{
      if(!(inputDate < today)){
         birthDayError.textContent='can`t choose a future date';
         birthDayError.classList.add('box-error');
         birthDay.style.border='2px solid red';
      }else{
         birthValidated=true;
      }
   }
   return birthValidated;
}
function birthChanging(){
   birthDayError.classList.remove('box-error');
   birthDayError.textContent="";
   birthDay.style.border='1px solid #5a5656';
}

function phoneValidation(){
   var flagValidateLetter=false;
   finalPhoneValidation=false;
   if (!hasALetter(phone.value)) {
      for (let i = 0; i < phone.value.length; i++) {
         if (isNaN(phone.value[i])) {
            flagValidateLetter=false;
            console.log('tiene simbolo');
            break;
         }else{
            flagValidateLetter=true;
         }
      }  
   }else{
      phoneError.textContent='other than numbers are not allowed in this input';
      phoneError.classList.add('box-error');
      phone.style.border='2px solid red';
   }
   if(flagValidateLetter){
      if(!(phone.value.length === 10)){
         phoneError.textContent='phone number needs to be 10 characters long';
         phoneError.classList.add('box-error');
         phone.style.border='2px solid red';
      }else{
         finalPhoneValidation=true;
      }
   }else{
      if (phone.value.length !== 0) {
         phoneError.textContent='other than numbers are not allowed in this input';
         phoneError.classList.add('box-error');
         phone.style.border='2px solid red';
      }  
   }
}
function phoneChanging(){
   phoneError.classList.remove('box-error');
   phoneError.textContent="";
   phone.style.border='1px solid #5a5656';
}
function postCodeValidation(){
   var flagValidateLetter=false;
   finalPostalCodeValidation=false;
   if (!hasALetter(postCode.value)) {
      for (let i = 0; i < postCode.value.length; i++) {
         if (isNaN(postCode.value[i])) {
            flagValidateLetter=false;
            console.log('tiene simbolo');
            break;
         }else{
            flagValidateLetter=true;
         }
      }  
   }else{
      postCodeError.textContent='other than numbers are not allowed in this input';
      postCodeError.classList.add('box-error');
      postCode.style.border='2px solid red';
   }
   if(flagValidateLetter){
      if(!(postCode.value.length>=4 && postCode.value.length <=5)){
         postCodeError.textContent='Postal code needs to be 4 or 5 characters long';
         postCodeError.classList.add('box-error');
         postCode.style.border='2px solid red';
      }else{
         finalPostalCodeValidation=true;
      }
   }else{
      if (phone.value.length !== 0) {
         postCodeError.textContent='other than numbers are not allowed in this input';
         postCodeError.classList.add('box-error');
         postCode.style.border='2px solid red';
      }  
   }
}

function postCodeChanging(){
   postCodeError.classList.remove('box-error');
   postCodeError.textContent="";
   postCode.style.border='1px solid #5a5656';
}
function locationValidation(){
   var flagLocation=true;
   finalLocationValidation=false;
   for (let i = 0; i < locali.value.length; i++) {
      //to validate if it is a symbol
      if(isNaN(locali.value[i])){
         if ( !(locali.value[i].toLowerCase() >= 'a' && locali.value[i].toLowerCase() <= 'z') ){
            flagLocation=false;
            break;
         }
      } 
   }
   if (flagLocation) {
      if(!(locali.value.length>3 )){
         if(locali.value.length!==0){
            localiError.textContent='Location needs to be more than 3 characters long';
            localiError.classList.add('box-error');
            locali.style.border='2px solid red';
         }
      }else{
         finalLocationValidation=true;
      }
   }else{
      localiError.textContent='Symbols are not allowed';
      localiError.classList.add('box-error');
      locali.style.border='2px solid red';
   }  
}
function locationChanging(){
   localiError.classList.remove('box-error');
   localiError.textContent="";
   locali.style.border='1px solid #5a5656';
}

function addressValidation(){
   var addressSplit=address.value.trim().split(' ');
   var hasNumberr=0;
   var hasLetter=0;
   var hasSymbol=false;
   finalAddressValidation=false;
   for (let i = 0; i < address.value.length; i++) {
      if(isNaN(address.value[i])){
         if ( !(address.value[i].toLowerCase() >= 'a' && address.value[i].toLowerCase() <= 'z') ){
            hasSymbol=true;
            break;
         }
      } 
   }
   if(!hasSymbol){
      if(address.value.length > 5){
         //line below verify if it isn't 2 parts is because there isn't a space or there's more than 1 space
         if(!(addressSplit.length!==2)){
            //loop each part of the split and each character to verify if it is letter or number
            for (let i = 0; i < addressSplit.length; i++) {
               for (let j = 0; j < addressSplit[i].length; j++) {
                  if( isNaN(addressSplit[i][j]) ){
                     hasLetter++;
                  }else{
                     hasNumberr++;
                  }
               }
            }
            if(hasLetter>0 && hasNumberr>0){
               finalAddressValidation=true;
            }else{
               addressError.textContent='Address must contain numbers and letters';
               addressError.classList.add('box-error');
               address.style.border='2px solid red';
            }

         }else{
            addressError.textContent='Address should only has one blank space';
            addressError.classList.add('box-error');
            address.style.border='2px solid red';
         }
      }else{
         if(address.value.length!==0){
            addressError.textContent='Address should be at least 5 characters';
            addressError.classList.add('box-error');
            address.style.border='2px solid red';
         }
      }
   }else{
      addressError.textContent='Symbols are not allowed';
      addressError.classList.add('box-error');
      address.style.border='2px solid red';
   }
}

function addressChanging(){
   addressError.classList.remove('box-error');
   addressError.textContent="";
   address.style.border='1px solid #5a5656';
}

function register(e){
   if(finalAddressValidation &&
      bothPasswordsValidation &&
      flagToLoginEmail && 
      flagNameRegister && 
      flagSurnameRegister && 
      finalDniValidation && 
      finalPhoneValidation && 
      finalLocationValidation && 
      finalPostalCodeValidation && 
      birthValidation()){
      alert('Name: '+namee.value+
      '\nSurname: '+surname.value+
      '\nDNI: '+dni.value +
      '\nDate of birth: '+birthDay.value+
      '\nPhone: '+ phone.value+
      '\nAddress: '+ address.value+
      '\nLocation: '+ locali.value+
      '\nPostal Code: '+postCode.value+
      '\nEmail: '+email.value +
      '\nPassword: ********');
   }else{
      e.preventDefault();
      alert("Something's wrong, correct the inputs in red");
      //change border to those inputs who are wrong
      if(!finalAddressValidation){address.style.border='2px solid red';}
      if(!flagToLoginEmail){email.style.border='2px solid red';}
      if(!flagNameRegister){namee.style.border='2px solid red';}
      if(!flagSurnameRegister){surname.style.border='2px solid red';}
      if(!finalDniValidation){dni.style.border='2px solid red';}
      if(!finalPhoneValidation){phone.style.border='2px solid red';}
      if(!finalLocationValidation){locali.style.border='2px solid red';}
      if(!finalPostalCodeValidation){postCode.style.border='2px solid red';}
      if(!(birthValidation())){birthDay.style.border='2px solid red';}
      if(!bothPasswordsValidation){
         pass.style.border='2px solid red';
         repeatPass.style.border='2px solid red'
      }
   }
}