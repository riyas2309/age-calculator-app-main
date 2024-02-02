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
  if (+input_year.value > 2024) {
    error_year.textContent = "this must be valid year";
    isvalid = false;
    return;
  } else {
    isvalid = true;
    error_year.textContent = "2023";
  }
  if (+input_year.value === 0) {
    isvalid = false;
    error_year.textContent = "this field is required";
    return;
  } else {
    error_year.textContent = "";
  }
});
