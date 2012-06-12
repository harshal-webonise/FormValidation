window.onload = init();
 

function init() 
{

   document.getElementById("theForm").onsubmit = validateForm;
<<<<<<< HEAD
=======
   document.getElementById("submit").onclick = sendData;
>>>>>>> c607846021df3fc578ec78f8143cc15628206a8f
   document.getElementById("reset").onclick = clearDisplay;
document.getElementById("data").onclick=sendData; 
   document.getElementById("name").focus();
}
 

<<<<<<< HEAD
function validateForm() 
{
=======

function validateForm() {
>>>>>>> c607846021df3fc578ec78f8143cc15628206a8f
   return (isNotEmpty("name", "Please enter your name")
        && isNumeric("zipcode", "Please enter a 5-digit zip code!")
        && isLengthMinMax("zipcode", "Please enter a 5-digit zip code!", 6, 6)
        && isSelected("country", "Please make a selection!")
        && isChecked("gender", "Please check a gender!")
        && isChecked("color", "Please check a color!")
        && isNumeric("phone", "Please enter a valid phone number!")
        && isValidEmail("email", "Enter a valid email!")
        && isLengthMinMax("password", "Enter a valid password!", 6, 8)
        && verifyPassword("password", "pwVerified", "Different from the password!")
        && isAge("age","Age is not valid",0,100));

   sendData();
}
 
// Retrun true if the input value is not empty

function isNotEmpty(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length != 0);  // boolean
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function showMessage(isValid, inputElement, errorMsg, errorElement) {
   if (!isValid) {
      // Put up error message on errorElement or via alert()
      if (errorElement != null) {
         errorElement.innerHTML = errorMsg;
      } else {
         alert(errorMsg);
      }
      // Change "class" of inputElement, so that CSS displays differently
      if (inputElement != null) {
         inputElement.className = "error";
         inputElement.focus();
      }
   } else {
      // Reset to normal display
      if (errorElement != null) {
         errorElement.innerHTML = "";
      }
      if (inputElement != null) {
         inputElement.className = "";
      }
   }
}
 
function isAge(inputId,errorMsg,minAge,maxAge)
{
	var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
var isValid=(inputValue>minAge && inputValue<maxAge);
showMessage(isValid,inputElement,errorMsg,errorElement);
return isValid;
}
function isNumeric(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.search(/^[0-9]+$/) != -1);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 

function isAlphabetic(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = inputValue.match(/^[a-zA-Z]+$/);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 

function isAlphanumeric(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = inputValue.match(/^[0-9a-zA-Z]+$/);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 

function isLengthMinMax(inputId, errorMsg, minLength, maxLength) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if the input value is a valid email address
// (For illustration only. Should use regexe in production.)
function isValidEmail(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   var atPos = inputValue.indexOf("@");
   var dotPos = inputValue.lastIndexOf(".");
   var isValid = (atPos > 0) && (dotPos > atPos + 1) && (inputValue.length > dotPos + 2);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if selection is made (not default of "") in <select> input
function isSelected(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   // You need to set the default value of <select>'s <option> to "".
   var isValid = inputValue != "";
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if the one of the checkboxes or radio buttons is checked
function isChecked(inputName, errorMsg) {
   var inputElements = document.getElementsByName(inputName);
   var errorElement = document.getElementById(inputName + "Error");
   var isChecked = false;
   for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
         isChecked = true;  // found one element checked
         break;
      }
   }
   showMessage(isChecked, null, errorMsg, errorElement);
   return isChecked;
}
 
// Verify password. The password is kept in element with id "pwId".
// The verified password in id "verifiedPwId".
function verifyPassword(pwId, verifiedPwId, errorMsg) {
   var pwElement = document.getElementById(pwId);
   var verifiedPwElement = document.getElementById(verifiedPwId);
   var errorElement = document.getElementById(verifiedPwId + "Error");
   var isTheSame = (pwElement.value == verifiedPwElement.value);
   showMessage(isTheSame, verifiedPwElement, errorMsg, errorElement);
   return isTheSame;
}
 
// The "onclick" handler for the "reset" button to clear the display
function clearDisplay() {
   var elms = document.getElementsByTagName("*");  // all tags
   for (var i = 0; i < elms.length; i++) {
      if ((elms[i].id).match(/Error$/)) {  // no endsWith() in JS?
         elms[i].innerHTML = "";
      }
      if (elms[i].className == "error") {  // assume only one class
         elms[i].className = "";
      }
   }
   // Set initial focus
   document.getElementById("name").focus();
}
