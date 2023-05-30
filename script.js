document.getElementById("convertBtn").addEventListener("click", function() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var convertedTemperature;
  
    if (isNaN(temperatureInput)) {
      document.getElementById("result").textContent = "Please enter a valid temperature!";
      return;
    }
  
    if (unitSelect === "celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
      document.getElementById("result").textContent = convertedTemperature.toFixed(2) + " °F";
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
      document.getElementById("result").textContent = convertedTemperature.toFixed(2) + " °C";
    } else if (unitSelect === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      document.getElementById("result").textContent = convertedTemperature.toFixed(2) + " K";
    }
  });
  