import {convertKMtoMiles} from "./convert.js"
const kmInput = document.querySelector("#km-input");
let milesOutput = document.querySelector("#miles-output");
let convertButton = document.querySelector("#convert-button");

function convert(){

        if(document.querySelector("#km-input").value >= 0){ //making sure that distance is not negative
            return milesOutput.value = convertKMtoMiles(kmInput.value);
        }else{
            return milesOutput.value = "Distance can't be negative";
        }
}
kmInput.addEventListener('keydown', (event) =>{
    if(event.keyCode === 13){
        convert();
    }
    
});
convertButton.addEventListener('click', convert);

