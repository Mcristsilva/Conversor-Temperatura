
function converterTemperatura () {
  var temperaturaCelsius = parseInt(document.getElementById("temperatura").value)
  var temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;  
  var resultadoTela = document.getElementById("resultado")
  resultadoTela.innerHTML = "Temperatura em Fahrenheit é: " + temperaturaFahrenheit + "°F"
}