const button: HTMLButtonElement = document.querySelector("button") as HTMLButtonElement;
/**
 * Array where this first element is a number representing the size
 * of the prepended space and the rest of the values are 
 * input strings 
 * @param spaceAndInputs 
 * @returns 
 */
function prepend<T>(spaceAndInputs: T[]): string[] {
    // Should have at least two values
    if (spaceAndInputs.length < 2 || typeof +spaceAndInputs[0] != "number")
        return [];
    let numberOfSpaces = +spaceAndInputs[0];
    let space: string = "";
    while (numberOfSpaces-- != 0) {
        space += " ";
    }
    let result: string[] = [];
    for (let i: number = 1; i < spaceAndInputs.length; i++) {
        if (typeof spaceAndInputs[i] != "string")
            continue;
        result.push(space + spaceAndInputs[i]);
    }
    return result;
}

button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Creating Prepend String");
    const inputs: HTMLInputElement = document.getElementById("input_string") as HTMLInputElement;
    // const inputNumberOfSpaces: HTMLInputElement = document.getElementById("number_of_spaces") as HTMLInputElement;
    const outputSpan: HTMLSpanElement = document.getElementById("output_string") as HTMLSpanElement;
    console.log(`Inputs : ${inputs.value}`);
    // console.log(`Number of spaces: ${inputNumberOfSpaces.value}`);
    let outputString = prepend(inputs.value.split(",").map(input => input.trim()));
    console.log(`Output : ${outputString}`);
    outputSpan.textContent = outputString.join(",");
});







