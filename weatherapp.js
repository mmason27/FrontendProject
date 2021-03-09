const cityNameTextBox = document.getElementById("cityNameTextBox")
const searchButton = document.getElementById("searchButton")
const weatherUL = document.getElementById("weatherUL")
const latLongUL = document.getElementById("latLongUL")
const stateNameTextBox = document.getElementById("stateNameTextBox")

searchButton.addEventListener('click', function(){

    weatherUL.innerHTML = ""

    let city = cityNameTextBox.value
    let state = stateNameTextBox.value
    cityNameTextBox.value = ""
    stateNameTextBox.value = ""

    fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city},${state}&key=dff6a3d2b47f4c738ef66cad6c012603&hours=48&units=I`)
    .then((response)=>{
        return (response.json())
    }).then((result)=>{
            console.log(result.data)
                
            for (let index = 0; index <=47; index++) {
            
            let allWeather = ((result.data[index]))
            // console.log(allWeather)
            // console.log(allWeather.app_temp)


            let displayTemp = ` 
                            <div class="weatherInfo">
                            <div>Time: ${allWeather.timestamp_local} |
                            Feels Like Temp: ${allWeather.app_temp}<span>&#176;</span></div>
                            <div class="clothesDisplay">What to Wear: ${clothingApparel(allWeather.app_temp)}</div>
                            <br>
                            <br>
                            </div>`

            weatherUL.insertAdjacentHTML('beforeend', displayTemp)    
        }
    })

})

function clothingApparel(temp) {
    if (temp > 80){
        return  "tank top"
    }
    else if (temp <= 80 && temp > 70 ){
        return  "t-shirt"
    }
    else if (temp <= 70 && temp > 60 ){
        return "full sleeves shirt"
    }
    else if (temp <= 60 && temp > 50 ){
        return "jacket"
    }
    else if (temp <= 50 && temp > 40 ){
        return "overcoat"
    }
    else if (temp <= 40 && temp > 30 ){
        return "overcoat"
    }
    else if (temp <= 30){
        return  "jacket + overcoat + gloves"
    }
}


// WEATHER BY LAT/LONG



// const successfulLookup = function(position){

//     const {latitude,longitude} = position.coords;
//     fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=dff6a3d2b47f4c738ef66cad6c012603`)
//     .then(function(response){
//         console.log(response)
//         return response.json()
//     })
//     .then(function(result){

//             let displayTemp = ` 
//                             <li>
//                             Temp: ${result.data[0].app_temp} --- Time: ${result.data[0].timestamp_local}
//                             <br>
//                             <br>
//                             </li>`

//         latLongUL.innerHTML = displayTemp

//     })
// }


// // console.log((navigator.geolocation.getCurrentPosition(successfulLookup,console.log)))


// console.log((navigator.geolocation.getCurrentPosition(successfulLookup,console.log)))
