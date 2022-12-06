import {convertKMtoMiles} from "./convert.js"
const kmInput = document.querySelector("#km-input");
const milesOutput = document.querySelector("#miles-output");
const convertButton = document.querySelector("input[type='button']");

kmInput.addEventListener("keyup",() => {
    milesOutput.value = convertKMtoMiles(kmInput.value);
});
convertButton.addEventListener("click",() => {
    milesOutput.value = convertKMtoMiles(kmInput.value);
});
