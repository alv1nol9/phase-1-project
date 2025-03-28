const apiKey = "80b66afce1729a18078f9d6874501581";
const btn = document.querySelector("button");
const form = document.getElementById("enterCity");
const input = document.getElementById("cityInput"); 

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const city = input.value.trim() 
    if (city) {
        try {
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)
        } catch {
           alert
           ("Please enter a valid city!")
        }
    } else {
        alert("Please enter a city!")
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`; // Fix: Correct API URL
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    return data
  
}

function displayWeatherInfo(data) {
  const {name :city, main : {temp,humidity}, weather : [{description,id}]} = data

  const cityDisplay = document.getElementById("city")
  const descriptionDisplay = document.getElementById("description")
  const tempDisplay = document.getElementById("temp")
  const imageDisplay = document.querySelector("img")
  

  cityDisplay.textContent = city;
  descriptionDisplay.textContent = description
  tempDisplay.textContent = `${temp}°C`
  
  if(data.weather[0].main == "Clear"){
    imageDisplay.src ="weather/sun.png"
  }
 else if(data.weather[0].main === "Rain"){
    imageDisplay.src ="weather/rain.png"
  }
  else if(data.weather[0].main === "Drizzle"){
    imageDisplay.src ="weather/rain.png"
  }
  else if(data.weather[0].main === "Snow"){
    imageDisplay.src ="weather/snow.png"
  }
  else if(data.weather[0].main === "Clouds"){
    imageDisplay.src ="weather/cloud.png"
  }
  else if(data.weather[0].main === "Thunderstorm"){
    imageDisplay.src ="weather/storm.png"
  }


}




