function updateTime() {
    
    //Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoDate = moment.tz("Asia/Tokyo").format("MMMM Do, YYYY");
        let tokyoTime = moment.tz("Asia/Tokyo").format("hh:mm:ss  [<small>]A[<small>]");
        
        tokyoDateElement.innerHTML = tokyoDate;
        tokyoTimeElement.innerHTML = tokyoTime;
    }
    
    //London
    let londonElement = document.querySelector("#london");
    if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDate = moment.tz("Europe/london").format("MMMM Do, YYYY");
    let londonTime = moment.tz("Europe/london").format("hh:mm:ss [<small>]A[<small>]");
    
    londonDateElement.innerHTML = londonDate;
    londonTimeElement.innerHTML = londonTime;
    }

    //Mumbai
    let mumbaiElement = document.querySelector("#mumbai");
    if (mumbaiElement) {
    let mumbaiDateElement = mumbaiElement.querySelector(".date");
    let mumbaiTimeElement = mumbaiElement.querySelector(".time");
    let mumbaiDate = moment.tz("Asia/Calcutta").format("MMMM Do, YYYY");
    let mumbaiTime = moment.tz("Asia/Calcutta").format("hh:mm:ss [<small>]A[<small>]");
    
    mumbaiDateElement.innerHTML = mumbaiDate;
    mumbaiTimeElement.innerHTML = mumbaiTime;
    }
    
    //New York
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkDate = moment.tz("America/New_York").format("MMMM Do, YYYY");
    let newYorkTime = moment.tz("America/New_York").format("hh:mm:ss [<small>]A[<small>]");
    
    newYorkDateElement.innerHTML = newYorkDate;
    newYorkTimeElement.innerHTML = newYorkTime;
    }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
        cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityDate = moment.tz(cityTimezone).format("MMMM Do, YYYY")
    let cityTime = moment.tz(cityTimezone);
    let defaultCities = document.querySelector("#defaultCities");
    defaultCities.innerHTML = `
    <div class="city">
        <div>
            <div class="panel">PLACEHOLDER</div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  <button><a href="/">Back</a></button>

  `;
}

let citiesSelectElement = document.querySelector("#dropdownMenu");
citiesSelectElement.addEventListener("change", updateCity);