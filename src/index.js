var button = document.querySelector("button");
/**
 * Array where this first element is a number representing the size
 * of the prepended space and the rest of the values are
 * input strings
 * @param spaceAndInputs
 * @returns
 */
function prepend(spaceAndInputs) {
    // Should have at least two values
    if (spaceAndInputs.length < 2 || typeof +spaceAndInputs[0] != "number")
        return [];
    var numberOfSpaces = +spaceAndInputs[0];
    var space = "";
    while (numberOfSpaces-- != 0) {
        space += " ";
    }
    var result = [];
    for (var i = 1; i < spaceAndInputs.length; i++) {
        if (typeof spaceAndInputs[i] != "string")
            continue;
        result.push(space + spaceAndInputs[i]);
    }
    return result;
}
button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Creating Prepend String");
    var inputs = document.getElementById("input_string");
    // const inputNumberOfSpaces: HTMLInputElement = document.getElementById("number_of_spaces") as HTMLInputElement;
    var outputSpan = document.getElementById("output_string");
    console.log("Inputs : ".concat(inputs.value));
    // console.log(`Number of spaces: ${inputNumberOfSpaces.value}`);
    var outputString = prepend(inputs.value.split(",").map(function (input) { return input.trim(); }));
    console.log("Output : ".concat(outputString));
    outputSpan.textContent = outputString.join(",");
});
