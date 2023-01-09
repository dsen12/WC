function updateTime() {
    //Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDate = moment.tz("Australia/Sydney").format("MMMM Do, YYYY");
    let sydneyTime = moment.tz("Australia/Sydney").format("hh:mm:ss [<small>]A[<small>]");
    
    sydneyDateElement.innerHTML = sydneyDate;
    sydneyTimeElement.innerHTML = sydneyTime;
    }

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

    //Lagos
    let lagosElement = document.querySelector("#lagos");
    if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosDate = moment.tz("Africa/Tokyo").format("MMMM Do, YYYY");
    let lagosTime = moment.tz("Africa/Tokyo").format("hh:mm:ss  [<small>]A[<small>]");
    
    lagosDateElement.innerHTML = lagosDate;
    lagosTimeElement.innerHTML = lagosTime;
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
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#dropdownMenu");
citiesSelectElement.addEventListener("change", updateCity);