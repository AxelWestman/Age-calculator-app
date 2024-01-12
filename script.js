//Vamos a seleccionar los elementos "output".
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

//Ahora seleccionamos los elementos "input".
let isValid = false;

const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

//Seleccionamos los "error elements".

const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

let actualDate = new Date();
let añoActual = actualDate.getFullYear();
console.log(añoActual);

submit_btn.addEventListener("click", calculateDate);

input_day.addEventListener("input", e => {
    if(+input_day.value > 31){
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
    }
    else{
        isValid = true;
    }
    if(+input_day.value === 0){
        isValid = false;
        error_day.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        error_day.textContent = "";
    }
});

input_month.addEventListener("input", e => {
    if(+input_month.value > 12){
        error_month.textContent = "Must be a valid date";
        isValid = false;
        return;
    }
    else{
        isValid = true;
    }
    if(+input_month.value === 0){
        isValid = false;
        error_month.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        error_month.textContent = "";
    }
});

input_year.addEventListener("input", e => {
    if(+input_year.value > añoActual){
        error_year.textContent = "Must be a valid date";
        isValid = false;
        return;
    }
    else{
        isValid = true;
    }
    if(+input_year.value === 0){
        isValid = false;
        error_year.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        error_year.textContent = "";
    }
});


function calculateDate(){
    if(isValid){
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`; 
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMIll = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMIll);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    } else{
    alert("error")
 }
}