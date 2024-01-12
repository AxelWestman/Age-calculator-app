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