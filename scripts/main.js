import {convertKMtoMiles} from "./convert.js"
const kmInput = document.querySelector("#km-input");
let milesOutput = document.querySelector("#miles-output");
const convertButton = document.querySelector("input[type='button']");

kmInput.addEventListener("keyup",() => {
    
    let kmValue = document.querySelector("input[id='km-input'").value;
    console.log(kmValue);
    if(kmValue >= 0){
    milesOutput.value = convertKMtoMiles(kmInput.value);
    }else{
        milesOutput.value = "Distance can't be negative"
    }
});
// convertButton.addEventListener("click",() => {
//     milesOutput.value = 0;
//     kmInput = 0;
// });
