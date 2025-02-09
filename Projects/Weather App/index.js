const search = document.getElementById("input-city")
const button = document.getElementById("search-button")
const CityName = document.getElementById("city-name")
const CityTime = document.getElementById("city-time") 
const CityTem = document.getElementById("city-temprature")

// function for fetching data
async function getdata(cityName){
   const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5092037d32de4c79b8e120839250902&q=${cityName}&aqi=yes`);

    return await promise.json()

}

button.addEventListener("click", async ()=>{
    let value = search.value;
    const Result = await getdata(value)
    console.log(Result)
    CityName.innerText = `${Result.location.name} - ${Result.location.region} - ${Result.location.country}`
    CityTime.innerText = `${Result.location.localtime}`
    CityTem.innerText = `${Result.current.temp_c}`
})

//wheather Api Url
// http://api.weatherapi.com/v1/current.json?key=5092037d32de4c79b8e120839250902&q=London&aqi=yes