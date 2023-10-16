

let btnSearch = document.querySelector('.btn-search');

btnSearch.addEventListener('click', () =>{
    async function showWeather(){
    
    
        let town = document.querySelector('.town');
        let townName = town.value;
    
    
        let url = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=9306232a6d0053bdbadd14d379d8c2e2&units=metric`);
        const weather = await url.json();
    
    
        // Recupération des balise HTML
            
        const cityParagraph = document.querySelector(".p-city-name");
        cityParagraph.textContent = weather.name;
    
        const temperatureParagraph = document.querySelector(".degre-temperature");
        temperatureParagraph.textContent = weather.main.temp
    
        const humidityParagraph = document.querySelector(".hunidity-percentage");
        humidityParagraph.textContent = weather.main.humidity;
    
        const windParagraph = document.querySelector(".level-wind");
        windParagraph.textContent = weather.wind.speed;
    
    };
    showWeather()
})