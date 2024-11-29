const unitSelection = document.getElementById("unitSelection");
const metricInputs = document.getElementById("metricInputs");
const imperialInputs = document.getElementById("imperialInputs");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Show/hide input fields based on unit selection
unitSelection.addEventListener("change", () => {
  if (unitSelection.value === "metric") {
    metricInputs.style.display = "block";
    imperialInputs.style.display = "none";
  } else {
    metricInputs.style.display = "none";
    imperialInputs.style.display = "block";
  }
});

// Calculate BMI based on selected unit
calculateBtn.addEventListener("click", () => {
  if (unitSelection.value === "metric") {
    const heightCm = parseFloat(document.getElementById("heightCm").value);
    const weightKg = parseFloat(document.getElementById("weightKg").value);

    if (heightCm > 0 && weightKg > 0) {
      const heightM = heightCm / 100; // Convert cm to meters
      const bmi = (weightKg / (heightM * heightM)).toFixed(2);
      result.textContent = `Your BMI is ${bmi}`;
    } else {
      result.textContent = "Please enter valid height and weight values.";
    }
  } else if (unitSelection.value === "imperial") {
    const heightFeet = parseInt(document.getElementById("heightFeet").value) || 0;
    const heightInches = parseInt(document.getElementById("heightInches").value) || 0;
    const weightLbs = parseFloat(document.getElementById("weightLbs").value);

    if ((heightFeet > 0 || heightInches > 0) && weightLbs > 0) {
      const totalInches = (heightFeet * 12) + heightInches; // Convert feet to inches
      const bmi = ((703 * weightLbs) / (totalInches * totalInches)).toFixed(2);
      result.textContent = `Your BMI is ${bmi}`;
    } else {
      result.textContent = "Please enter valid height and weight values.";
    }
  }
});

  