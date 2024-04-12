const response = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=experimental') 
const data = await response.json()
    // set the background image
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    // Set the authors name
        document.getElementById('author').textContent = `By: ${data.user.name}`;

    // .catch(err => {
    //     document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1520199144204-310fca6d9fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI5Mjc1MTh8&ixlib=rb-4.0.3&q=80&w=1080)`
    //     const imageAuthor = document.getElementById('author');
    //     imageAuthor.textContent = `By: Kev Costello`;
    // })




const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
if (!res.ok) {
    throw Error("Something went wrong")
}
const data1 = await res.json()
    document.getElementById("crypto-top-el").innerHTML = `       
        <img src=${data1.image.small}/>
        <span> ${data1.name} </span>
        `
    document.getElementById("crypto").innerHTML += `
        <p> 🎯: R${data1.market_data.current_price.zar}</p>
        <p> 👆🏽: R${data1.market_data.high_24h.zar}</p>
        <p> 👇🏽: R${data1.market_data.low_24h.zar}</p>
        `

    // .catch(err => console.error(err))

function updateTime(){
    const date = new Date();
    const time = date.toLocaleTimeString("en-us", {timeStyle: "short"});
    document.getElementById("time-el").textContent = `${time}`
    // console.log(time);
};

setInterval(updateTime, 1000);

navigator.geolocation.getCurrentPosition(async position => {
    // console.log(position)
    const weatherRes = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`) 
        if (!weatherRes.ok) {
            throw Error("Weather data not available")
        }
        const data2 = await weatherRes.json()
            // console.log(data)
            const weatherIconURL = `https://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${weatherIconURL} />
                <p class="weather-temp">${Math.round(data2.main.temp)}°</p>
                <p class="weather-city">${data2.name}</p>
            `
             // .catch(err => console.error(err))
        });
       


