const btn = document.querySelector(".btn")
const inputValue = document.querySelector(".inputValue")
const desc = document.querySelector(".desc")
const windSpeed = document.querySelector(".wind-speed")


btn.addEventListener("click", () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=93dee87a25439f60c78b5bec94880922`)
    .then(Response => Response.json())
    .then(data =>{
        console.log(data)

        let temp = data.main.temp;
        let description = data.weather[0].description;
        let windSpeed = data.wind.speed;
        let icon = data.weather[0].icon;

          
       let iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`

       document.querySelector(".icon-image").src = iconLink;
       document.querySelector(".temp").textContent =   Math.round((temp -273.15)*10 )/10 ;
       document.querySelector(".desc").textContent = description;
       document.querySelector(".wind-speed").textContent = windSpeed + "m/s";




    })

    
});