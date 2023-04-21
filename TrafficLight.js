let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");

let stopButtonElement = document.getElementById("stopButton");
let readyLightButtonElement = document.getElementById("readyLightButton");
let goLightButtonElement = document.getElementById("goLightButton");

function turnOnRed(){

    stopLightElement.style.backgroundColor = "#cf1124";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor  = "#4b5069";
    
    stopButtonElement.style.backgroundColor = "#cf1124";
    readyLightButtonElement.style.backgroundColor = "#1f1d41 ";
    goLightButtonElement.style.backgroundColor = "#1f1d41 "; 
}
function turnOnYellow(){

    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor  = "#4b5069";
    
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyLightButtonElement.style.backgroundColor = "#f7c948";
    goLightButtonElement.style.backgroundColor = "#1f1d41";
}
function turnOnGreen(){

    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor  = "#199473";
    
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyLightButtonElement.style.backgroundColor = "#1f1d41";
    goLightButtonElement.style.backgroundColor = "#199473";
}
