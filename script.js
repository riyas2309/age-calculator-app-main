const currentDate = new Date();
const currentYear = currentDate.getFullYear();

//select the input vlaues

const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
const input_year = document.querySelector("#year");

//select output
let isvalid = false;
const output_day = document.querySelector(".output-day");
const output_month = document.querySelector(".output-month");
const output_year = document.querySelector(".output-year");
const submmit_button = document.querySelector(".button");
// const submmit_button = document.querySelector(".button");

//select error values
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

//submit button eventlistener
submmit_button.addEventListener("click", calculate_age);

//month event listener
input_day.addEventListener("input", (e) => {
  // const inputValue = e.target.value;
  // Perform actions based on the input value
  // console.log("Input value:", inputValue);
  if (+input_day.value > 31) {
    error_day.textContent = "this must be valid day";
    isvalid = false;
    return;
  } else {
    isvalid = true;
    error_day.textContent = "";
  }
  if (+input_day.value === 0) {
    isvalid = false;
    error_day.textContent = "this field is required";
    return;
  } else {
    error_day.textContent = "";
  }
});
//month event listener
input_month.addEventListener("input", (e) => {
  // const inputValue = e.target.value;
  // Perform actions based on the input value
  // console.log("Input value:", inputValue);
  if (+input_month.value > 12) {
    error_month.textContent = "this must be valid month";
    isvalid = false;
    return;
  } else {
    isvalid = true;
    error_month.textContent = "";
  }
  if (+input_month.value === 0) {
    isvalid = false;
    error_month.textContent = "this field is required";
    return;
  } else {
    error_month.textContent = "";
  }
});

//year event listener
input_year.addEventListener("input", (e) => {
  // const inputValue = e.target.value;
  // Perform actions based on the input value
  // console.log("Input value:", inputValue);
  if (+input_year.value > currentYear) {
    error_year.textContent = "this must be valid year";
    isvalid = false;
    return;
  } else {
    isvalid = true;
    error_year.textContent = "";
  }
  if (+input_year.value === 0) {
    isvalid = false;
    error_year.textContent = "this field is required";
    return;
  } else {
    error_year.textContent = "";
  }
});
function calculate_age() {
  if (isvalid) {
    let birthday_date = `${input_month.value}/${input_day.value}/${input_year.value}`;
    let birthday_date_obj = new Date(birthday_date);
    let age_diff = Date.now() - birthday_date_obj.getTime();
    let age_date = new Date(age_diff);

    let age_years = age_date.getUTCFullYear() - 1970;
    let age_months = age_date.getUTCMonth();
    let age_days = age_date.getUTCDate() - 1;

    // Update the corresponding DOM elements
    output_day.textContent = age_days;
    output_month.textContent = age_months;
    output_year.textContent = age_years;
  } else {
    alert("Error in the form. Please check the inputs.");
  }
}
