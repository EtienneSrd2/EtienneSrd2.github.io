document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const villeInput = document.querySelector('#Ville');
    const villeValue = villeInput.value;

    if (document.querySelector('#Ville').value !== ('') || isNaN(document.querySelector('#Ville').value)) {
        document.querySelector("#Ville").style.border = '#c0392b 2.5px solid';

        const donnees = await getMeteo(villeValue);
        const temperature = donnees.main.temp;
        const temps = donnees.weather[0].main;

        document.querySelector('.degres').textContent = Math.round(temperature);
        document.querySelector('#Ville').textContent = donnees.name;
        document.querySelector('.town').textContent = document.querySelector('#Ville').value;

        const icone = document.querySelector('i.wi');

        let className = 'wi wi-day-rain';


        if (temps === "Clouds") className = 'wi wi-day-cloudy';
        else if (temps === 'Rain') className = 'wi wi-day-rain';
        else if (temps === 'Clear') className = 'wi wi-day-sunny';
        else if (temps === 'Snow') clasName = 'wi wi-day-snow';
        else if (temps === 'Drizzle') className = 'wi wi-day-sleet';
        else if (temps === 'mist') clasName = 'wi wi-day-fog';
        icone.className = className;

        let background = document.querySelector('#meteo');

        if(temps === "Clouds") background.className = 'cloudBack';
        else if (temps === "Rain") background.className = 'rainBack';
        else if (temps === "Clear") background.className = 'clearBack';
        else if (temps === "Snow") background.className = 'snowBack';
        else if (temps === "Drizzle") background.className = 'drizzleBack';
        else if (temps === "mist") background.className = 'mistBack';
        

        let detailsWeather = document.getElementById('detailMeteo');

        if (temps === "Clouds") detailsWeather.innerHTML = 'le temps sera nuageux.';
        else if (temps === "Rain") detailsWeather.innerHTML = 'le temps sera pluvieux.';
        else if (temps === "Clear") detailsWeather.innerHTML = 'le ciel sera clair aujourd\'hui.';
        else if (temps === "Snow") detailsWeather.innerHTML = 'des chutes de neiges sont annoncées.';
        else if (temps === "Drizzle") detailsWeather.innerHTML = 'du brouillard est attendu.';
        else if (temps === "mist") detailsWeather.innerHTML = 'du brouillard est attendu';
       


        
        // requete.send();
    }
    document.querySelector('#Ville').style.border = `#27ae60 2px solid`;


function getMeteo(ville) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#Ville').value}&appid=ee3e0784ed65fc7186df281b773f1efd&units=metric`)
        .then(function (reponse) {
            return reponse.json();
        })
      
}
});
