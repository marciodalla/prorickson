function converterTemperatura() {
    var tempFahrenheit = document.getElementById("tempFahrenheit").value;
    
    if (!tempFahrenheit) {
      alert("Por favor, insira uma temperatura em Fahrenheit.");
      return;
    }
    
    var tempCelsius = (tempFahrenheit - 32) * 5 / 9;
    
    document.body.style.backgroundColor = tempCelsius > 30 ? "orange" : "lightblue";
    alert("A temperatura em Celsius é: " + tempCelsius.toFixed(2));
  }