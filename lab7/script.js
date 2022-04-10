function currentweather(apiresponse) {
    let city = apiresponse["name"];
    document.getElementById("maintext").innerHTML = city;
    let temp = Math.floor(apiresponse["main"]["temp"]);
    if (temp > 0) {
        temp = "+" + temp;
    } else {
        temp = temp.toString(10);
    }
    document.getElementById("temperature").innerHTML = temp;
    let description = apiresponse["weather"][0]["description"];
    document.getElementById("weather").innerHTML = description;
    let iconid = apiresponse["weather"][0]["id"].toString(10);
    if (iconid[0] != "8") {
        iconid = iconid.slice(0, 1);
    }
    iconid = getBigIcon(iconid);
    document.getElementById("weathericon").style.backgroundImage = iconid;
    let wind = apiresponse["wind"]["speed"].toString(10);
    document.getElementById("wind").innerHTML = wind + " м/с";
    let humidity = apiresponse["main"]["humidity"].toString(10);
    document.getElementById("humidity").innerHTML = humidity + "%";
    let pressure = apiresponse["main"]["pressure"].toString(10);
    document.getElementById("pressure").innerHTML = pressure + " мм. рт. ст.";
}
function getBigIcon(iconid) {
    switch (iconid) {
        case "2":
            return "url('./icons/iconsBig/thunderstormicon_big.png')";
        case "3":
        case "5":
            return "url('./icons/iconsBig/rainicon_big.png')";
        case "6":
            return "url('./icons/iconsBig/snowicon_big.png')";
        case "7":
            return "url('./icons/iconsBig/dusticon_big.png')";
        case "800":
            return "url('./icons/iconsBig/clearicon_big.png')";
        case "801":
        case "802":
        case "803":
        case "804":
            return "url('./icons/iconsBig/cloudicon_big.png')";
    }
}
function forecastweather(apiresponse) {
    for (let i = 1; i < 4; i++) {
        let data1 = apiresponse["list"][i];
        //let index = i+1
        let tempid = "temperature" + i;
        let dateid = "date" + i;
        let weatherid = "weather" + i;
        let iconid = "icon" + i;
        let time = data1["dt_txt"].slice(11, 16);
        document.getElementById(dateid).innerHTML = time;
        let temp = Math.floor(data1["main"]["temp"]);
        if (temp > 0) {
            temp = "+" + temp;
        } else {
            temp = temp.toString(10);
        }
        document.getElementById(tempid).innerHTML = temp;
        let description = data1["weather"][0]["description"];
        document.getElementById(weatherid).innerHTML = description;
        let iconcode = data1["weather"][0]["id"].toString(10);
        if (iconcode[0] != "8") {
            iconcode = iconcode.slice(0, 1);
        }
        iconcode = getSmallIcon(iconcode);
        document.getElementById(iconid).style.backgroundImage = iconcode;
    }
}
function getSmallIcon(iconid) {
    switch (iconid) {
        case "2":
            return "url('./icons/iconsSmall/thunderstormicon_small.png')";
        case "3":
        case "5":
            return "url('./icons/iconsSmall/rainicon_small.png')";
        case "6":
            return "url('./icons/iconsSmall/snowicon_small.png')";
        case "7":
            return "url('./icons/iconsSmall/dusticon_small.png')";
        case "800":
            return "url('./icons/iconsSmall/clearicon_small.png')";
        case "801":
        case "802":
        case "803":
        case "804":
            return "url('./icons/iconsSmall/cloudicon_small.png')";
    }
}

function main() {
    let city = document.getElementById("search").value;
    //let city = "Москва";
    let apilink =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&lang=ru&units=metric&appid=76e0b84379494be53f3dec6e71bd4568";
    fetch(apilink)
        .then((response) => response.json())
        .then((response) => {
            if (response["cod"] != 200) {
                alert("город не найден");
            } else {
                currentweather(response);
            }
        });
    apilink =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&lang=ru&units=metric&appid=76e0b84379494be53f3dec6e71bd4568";
    fetch(apilink)
        .then((response) => response.json())
        .then((response) => {
            forecastweather(response);
        });
}
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&units=metric&appid=76e0b84379494be53f3dec6e71bd4568"
)
    .then((response) => response.json())
    .then((response) => {
        if (response["cod"] != 200) {
            alert("город не найден");
        } else {
            currentweather(response);
        }
    });
fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Москва&lang=ru&units=metric&appid=76e0b84379494be53f3dec6e71bd4568"
)
    .then((response) => response.json())
    .then((response) => {
        if (response["cod"] != 200) {
            alert("город не найден");
        } else {
            forecastweather(response);
        }
    });
