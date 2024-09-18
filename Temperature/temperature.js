function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById("inputTemperature").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;
    let result;

    if (isNaN(inputTemp)) {
        document.getElementById("result").innerHTML = "Please enter a valid temperature.";
        return;
    }

    // Conversion logic
    if (inputUnit === outputUnit) {
        result = inputTemp;
    } else {
        if (inputUnit === "celsius") {
            if (outputUnit === "fahrenheit") {
                result = (inputTemp * 9/5) + 32; // Celsius to Fahrenheit
            } else if (outputUnit === "kelvin") {
                result = inputTemp + 273.15; // Celsius to Kelvin
            }
        } else if (inputUnit === "fahrenheit") {
            if (outputUnit === "celsius") {
                result = (inputTemp - 32) * 5/9; // Fahrenheit to Celsius
            } else if (outputUnit === "kelvin") {
                result = (inputTemp - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
            }
        } else if (inputUnit === "kelvin") {
            if (outputUnit === "celsius") {
                result = inputTemp - 273.15; // Kelvin to Celsius
            } else if (outputUnit === "fahrenheit") {
                result = (inputTemp - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
            }
        }
    }

    // Display the result
    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} °${outputUnit.charAt(0).toUpperCase()}`;
}
