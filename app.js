window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    // Takes the input from user into height variable 
    let height = parseInt(document.querySelector("#height").value);
    // Takes the input from user into weight variable
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    // Error trapping if the user inputted an integer value or NaN (not a number)
    if(height === "" || isNaN(height)) {
        result.innerHTML = "Input valid Height!";
    }
    else if(weight === "" || isNaN(weight)) {
        result.innerHTML = "Input valid Weight!";
    }
    // if user input is valid, calculate the BMI of the user
    else {

        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Check if UW/N/OW
        if(bmi < 18.6) {
            result.innerHTML = `Under Weight: <span>${bmi}</span>`;
        }
        else if(bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal: <span>${bmi}</span>`;
        }
        else if(bmi >= 25 && bmi <= 30) {
            result.innerHTML = `Over Weight: <span>${bmi}</span>`;
        }
        else {
            result.innerHTML = `Obese: <span>${bmi}</span>`;
        }

    }


}