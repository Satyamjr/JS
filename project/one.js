const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.textContent = `Please provide a valid height.`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.textContent = `Please provide a valid weight.`;
    return;
  }

  // Calculate BMI
  const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));
  console.log("Calculated BMI:", bmi);

  // BMI Classification
  if (bmi < 18.5) {
    console.log("Underweight = Less than 18.5");
    results.textContent = `Your BMI is ${bmi} (Underweight)`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal Range = Between 18.5 and 24.9");
    results.textContent = `Your BMI is ${bmi} (Normal range)`;
  } else {
    console.log("Overweight = More than 24.9");
    results.textContent = `Your BMI is ${bmi} (Overweight)`;
  }
});
