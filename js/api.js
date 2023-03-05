
function mostrarUbicacion(ubicacion) {
    let latitud = ubicacion.coords.latitude;
    let longitud = ubicacion.coords.longitude;
    console.log(latitud);
    console.log(longitud);
  
    let key = "3df7c066404d275aed6db32cf93b3563";
  
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Jamaica&units=metric&lang=es&appid=" +
        key
    )
      .then((response) => response.json())
      .then((data) => {
        data.coord.lon = longitud;
        data.coord.lat = latitud;
        let clima = document.getElementById("clima");
        clima.innerHTML = `
                <div class="card-header ">
                    <h5 class="card-title text-light">El clima actual</h5>
                </div>
                <div class="card-body">
                    <p class="text-light">Temperatura: ${data.main.temp}° </p>
                    <p class="text-light">Termica: ${data.main.feels_like}°</p>
                    <p class="text-light">Humedad: ${data.main.humidity}%</p>
                    <p class="card-text text-light">Nubosidad: ${data.weather[0].description}</p>
                    <p class="text-light">Ciudad:${data.name}</p>
                </div>
                `;
  
        console.log(data);
      });
  }
  
  navigator.geolocation.getCurrentPosition(mostrarUbicacion);