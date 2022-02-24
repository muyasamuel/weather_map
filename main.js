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



    })

    
});