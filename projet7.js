const form = document.getElementById("form")
const first = document.getElementById("first_name")
const last = document.getElementById("last_name")
const email = document.getElementById("email")
const checkbox = document.querySelector("#general")
const checkbox1 = document.querySelector("#general1")
const message = document.getElementById("message")
const contact = document.getElementById("contact")
const btn = document.getElementById("btn")
const header = document.querySelector(".header")

const firstError = document.querySelector(".firstError")
const lastError = document.querySelector(".lastError")
const emailError = document.querySelector(".emailError")
const queryError = document.querySelector(".queryError")
const messageError = document.querySelector(".messageError")
const contactError = document.querySelector(".contactError")







form.addEventListener("submit", (e) => {
    e.preventDefault();
   if (first.value === "") {
    firstError.classList.remove("hidden")
   }else{
    firstError.classList.add("hidden")
   }

   if (last.value === "") {
    lastError.classList.remove("hidden")
   }else{
    lastError.classList.add("hidden")
   }


   if (message.value === "") {
    messageError.classList.remove("hidden")
   }else{
    messageError.classList.add("hidden")
   }


   if (!isEmail(email.value.trim())) {
    emailError.classList.remove("hidden")
   }else{
    emailError.classList.add("hidden")
   }
  
  if (checkbox.checked) {
    queryError.classList.add("hidden")
  }else if(checkbox1.checked){
    queryError.classList.add("hidden")
   }else{
    queryError.classList.remove("hidden")
   }

   if (contact.checked) {
    contactError.classList.add("hidden")
   }else{
    contactError.classList.remove("hidden")
   }
   

   if (first.value.length > 0 & last.value.length > 0  & isEmail(email.value.trim()) & message.value.length > 0  & (checkbox.checked || checkbox1.checked)  & contact.checked) {
    header.classList.remove("hidden")
   }else{
    header.classList.add("hidden")
   }
})
 

function isEmail(email){
return  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
}