const btn = document.querySelector('.search button');
btn.addEventListener('click', ()=>{
  const weathericon = document.querySelector('.wicon'); 
  const input = document.querySelector('.search input').value;
  const apikey = "57f835da98a8385ae9c2628facfa6239";
  const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  async function checkWeather(city) {
      const response = await fetch(apiurl + city + `&appid=${apikey}`);
      var data = await response.json();
      // console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
      }
      else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
      }
      else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
      }
      else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
      }
      else if(data.weather[0].main == "Snow"){
        weathericon.src = "images/snow.png";
      }
      else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
      } 
  }
  checkWeather(input);
});

let bhn = document.querySelector('.open');
let card = document.querySelector('.card');
let fill = document.querySelector('.fill');
bhn.addEventListener('click', ()=>{
    card.style.display = "block";
    fill.style.display = "none";
});
/////////tamplate string////////
let noi = 99;
let moi = 88;
function sum(noi, moi) {
  return noi + moi;
}
console.log(`${sum(noi, moi)}`);
