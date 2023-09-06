

function disableBtn() {
   document.getElementById("continue").disabled = true;
 }
 
 function enableBtn() {
   document.getElementById("continue").disabled = false;
 }




$(document).ready(function (){

  $("#exampleInputEmail1").blur(function (){

    var text=$(this).val();

    if(text.length<5){
      $("#cname").show();
    }  else{
      $("#cname").hide();
    }
  })

 
})
  

function validateEmail(){
  var Email=document.getElementById("exampleInputEmail2").value
  var error=document.getElementById("error-mail")
  var emailstaus=/^[a-z0-9]+[@]+[gmail yahoo]+[.]+[com]+$/
  if(Email.length<12)
 {
  error.innerHTML="Invalid Email";
  error.style.color="red";
  return false;
 }else if(Email.match(emailstaus))
 {
  error.innerHTML="Valid Email";
  error.style.color="green";
  return true;
 }
 else{
  error.innerHTML="Invalid Email";
  error.style.color="red";
  return false;

 }
}

// sign in page

function validatename(){
  var name=document.getElementById("form3Example1").value
  var error=document.getElementById("name");
  var namestatus = /^[A-Za-z\s]+$/;

 if(name.length<3){
    error.innerHTML="name invalid"
    error.style.color="red"
    return false;
  }else if(name.match(namestatus)){
    error.innerHTML="name valid";
    error.style.color="green";
    return true;
  }else{
    error.innerHTML="name invalid"
    error.style.color="red"
    return false;
  }
}

function validateEmail2(){
  var Email=document.getElementById("form3Example3").value
  var error=document.getElementById("email")
  var emailstaus=/^[a-z0-9]+[@]+[gmail yahoo]+[.]+[com]+$/
  if(Email.length<12)
 {
  error.innerHTML="Invalid Email";
  error.style.color="red";
  return false;
 }else if(Email.match(emailstaus))
 {
  error.innerHTML="Valid Email";
  error.style.color="green";
  return true;
 }
 else{
  error.innerHTML="Invalid Email";
  error.style.color="red";
  return false;

 }
}

function validatepassword(){
  var pass=document.getElementById("form3Example4").value
  var error=document.getElementById("pass1");
  var passstatus= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/


  if(pass.length===0){
      error.innerHTML="must be min 8 characters"
      error.style.color="red";
      return false;
  }else if(pass.length<8){
      error.innerHTML="must be min 8 characters"
      error.style.color="red";
      return false;
  }else if(!pass.match(passstatus)){
      error.innerHTML="must contain uppercase,lowercase,number,special characters"
      error.style.color="red";
      return false;
  }else{
      error.innerHTML="Valid";
      error.style.color="green";
      return true;
  
  }
}

function confirmpassword(){
  var pass=document.getElementById("form3Example4p2").value
  var pass2=document.getElementById("form3Example4").value
  var error=document.getElementById("passc");

  if(pass===pass2){

      error.innerHTML="Valid";
      error.style.color="green";
      return true;

     
    
  } else{

      error.innerHTML="inValid";
      error.style.color="red";
      return false;

  }
}

