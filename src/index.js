"use strict";
const button = document.querySelector("button");
function prepend(numSpaces, inputString) {
    return inputString.padStart(inputString.length + +numSpaces, " ");
}
button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Creating Prepend String");
    const inputString = document.getElementById("input_string");
    const inputNumberOfSpaces = document.getElementById("number_of_spaces");
    const outputSpan = document.getElementById("output_string");
    console.log(`Input string: ${inputString.value}`);
    console.log(`Number of spaces: ${inputNumberOfSpaces.value}`);
    let outputString = prepend(inputNumberOfSpaces.value, inputString.value);
    console.log(`Output : ${outputString}`);
    outputSpan.textContent = outputString;
});
