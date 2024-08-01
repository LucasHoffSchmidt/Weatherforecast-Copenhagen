// VARIABLES FOR DAYS
var day1;
var day2;
var day3;
var day4;
var day5;
var day6;
var day7;

var currentDay;
var currentDate;
var currentMonth;
var currentYear;

var secondDay;
var secondDate;
var secondMonth;

var thirdDay;
var thirdDate;
var thirdMonth;

var fourthDay;
var fourthDate;
var fourthMonth;

var fifthDay;
var fifthDate;
var fifthMonth;

var sixthDay;
var sixthDate;
var sixthMonth;

var seventhDay;
var seventhDate;
var seventhMonth;

const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// VARIABLES TO CONTAIN WEATHER DATA
// Temperature
var temperature1;
var temperature2;
var temperature3;
var temperature4;
var temperature5;
var temperature6;
var temperature7;

// Weather Condition
var weatherCondition1;
var weatherCondition2;
var weatherCondition3;
var weatherCondition4;
var weatherCondition5;
var weatherCondition6;
var weatherCondition7;

// Wind Direction
var windDirection1;
var windDirection2;
var windDirection3;
var windDirection4;
var windDirection5;
var windDirection6;
var windDirection7;

// Wind Speed
var windSpeed1;
var windSpeed2;
var windSpeed3;
var windSpeed4;
var windSpeed5;
var windSpeed6;
var windSpeed7;

// Precipitation
var precipitation1;
var precipitation2;
var precipitation3;
var precipitation4;
var precipitation5;
var precipitation6;
var precipitation7;

// Sunrise Time
var sunrise1;
var sunrise2;
var sunrise3;
var sunrise4;
var sunrise5;
var sunrise6;
var sunrise7;

// Sunset Time
var sunset1;
var sunset2;
var sunset3;
var sunset4;
var sunset5;
var sunset6;
var sunset7;

// FUNCTIONS
// Updates all weather data
window.onload = function updateWeatherTable() {
    changeDates();
    getWeatherDataFromAPI();
    startTimer();
}

// Updates the dates starting from the current data
function changeDates() {
    getFirstDay();
    getSecondDay();
    getThirdDay();
    getFourthDay();
    getFifthDay();
    getSixthDay();
    getSeventhDay();
}

function getFirstDay() {
    let someDate = new Date();
    currentDay = someDate.getDay();
    currentDate = someDate.getDate();
    currentMonth = someDate.getMonth() + 1;
    currentYear = someDate.getFullYear;
    
    day1 = weekdayNames[currentDay] + " " + currentDate + "/" + currentMonth;
}

function getSecondDay() {
    secondDay;
    secondDate;
    secondMonth;

    // Get the day of the week
    if (currentDay == 6)
    {
        secondDay = 0;
    } else {
        secondDay = currentDay += 1;
    }

    // Handles the last day of the year
    if (currentMonth == 12 & currentDate == 31) {
        secondDate = 1;
        secondMonth = 1;
        day2 = weekdayNames[secondDay] + " " + secondDate + "/" + secondMonth;
        return;
    } 

    // Get the date and month
    if (currentYear % 4 == 0 && currentMonth == 2) {
        if (currentDate == 29) {
            secondDate = 1;
            secondMonth = 3;
        }
        else {
            secondDate = currentDate += 1;
            secondMonth = currentMonth;
        }
    } else {
        if (currentMonth == 1 | 3 | 5 | 7 | 8 | 10 | 12) {
            if (currentDate == 31) {
                secondDate = 1;
                secondMonth = currentMonth += 1;
            }
            else {
                secondDate = currentDate += 1;
                secondMonth = currentMonth;
            }
        } else if (currentMonth == 4 | 6 | 9 | 11) {
            if (currentDate == 30) {
                secondDate = 1;
                secondMonth = currentMonth += 1;
            } else {
                secondDate = currentDate += 1;
                secondMonth = currentMonth;
            }
        } else {
            if (currentDate == 28) {
                secondDate = 1;
                secondMonth = currentMonth += 1;
            } else {
                secondDate = currentDate += 1;
                secondMonth = currentMonth;
            }
        }
    }

    day2 = weekdayNames[secondDay] + " " + secondDate + "/" + secondMonth;
}

function getThirdDay() {
    thirdDay;
    thirdDate;
    thirdMonth;

    // Get the day of the week
    if (secondDay == 6)
    {
        thirdDay = 0;
    } else {
        thirdDay = secondDay += 1;
    }

    // Handles the last day of the year
    if (secondMonth == 12 & secondDate == 31) {
        thirdDate = 1;
        thirdMonth = 1;
        day3 = weekdayNames[thirdDay] + " " + thirdDate + "/" + thirdMonth;
        return;
    } 

    // Get the date of the month
    if (currentYear % 4 == 0 && secondMonth == 2) {
        if (secondDate == 29) {
            thirdDate = 1;
            thirdMonth = 3;
        }
        else {
            thirdDate = secondDate += 1;
            thirdMonth = secondMonth;
        }
    } else {
        if (secondMonth == 1 | 3 | 5 | 7 | 8 | 10 | 12) {
            if (secondDate == 31) {
                thirdDate = 1;
                thirdMonth = secondMonth += 1;
            }
            else {
                thirdDate = secondDate += 1;
                thirdMonth = secondMonth;
            }
        } else if (secondMonth == 4 | 6 | 9 | 11) {
            if (secondDate == 30) {
                thirdDate = 1;
                thirdMonth = secondMonth += 1;
            } else {
                thirdDate = secondDate += 1;
                thirdMonth = secondMonth;
            }
        } else {
            if (secondDate == 28) {
                thirdDate = 1;
                thirdMonth = secondMonth += 1;
            } else {
                thirdDate = secondDate += 1;
                thirdMonth = secondMonth;
            }
        }
    }

    day3 = weekdayNames[secondDay] + " " + secondDate + "/" + secondMonth;
}

function getFourthDay() {
    fourthDay;
    fourthDate;
    fourthMonth;

    // Get the day of the week
    if (thirdDay == 6)
    {
        fourthDay = 0;
    } else {
        fourthDay = thirdDay += 1;
    }

    // Handles the last day of the year
    if (thirdMonth == 12 & thirdDate == 31) {
        fourthDate = 1;
        fourthMonth = 1;
        day4 = weekdayNames[fourthDay] + " " + fourthDate + "/" + fourthMonth;
        return;
    } 

    // Get the date of the month
    if (currentYear % 4 == 0 && thirdMonth == 2) {
        if (thirdDate == 29) {
            fourthDate = 1;
            fourthMonth = 3;
        }
        else {
            fourthDate = thirdDate += 1;
            fourthMonth = thirdMonth;
        }
    } else {
        if (thirdMonth == 1 | 3 | 5 | 7 | 8 | 10 | 12) {
            if (thirdDate == 31) {
                fourthDate = 1;
                fourthMonth = thirdMonth += 1;
            }
            else {
                fourthDate = thirdDate += 1;
                fourthMonth = thirdMonth;
            }
        } else if (thirdMonth == 4 | 6 | 9 | 11) {
            if (thirdDate == 30) {
                fourthDate = 1;
                fourthMonth = thirdMonth += 1;
            } else {
                fourthDate = thirdDate += 1;
                fourthMonth = thirdMonth;
            }
        } else {
            if (thirdDate == 28) {
                fourthDate = 1;
                fourthMonth = thirdMonth += 1;
            } else {
                fourthDate = thirdDate += 1;
                fourthMonth = thirdMonth;
            }
        }
    }

    day4 = weekdayNames[fourthDay] + " " + fourthDate + "/" + fourthMonth;
}

function getFifthDay() {
    fifthDay;
    fifthDate;
    fifthMonth;

    // Get the day of the week
    if (fourthDay == 6)
    {
        fifthDay = 0;
    } else {
        fifthDay = fourthDay += 1;
    }

    // Handles the last day of the year
    if (fourthMonth == 12 & fourthDate == 31) {
        fifthDate = 1;
        fifthMonth = 1;
        day5 = weekdayNames[fifthDay] + " " + fifthDate + "/" + fifthMonth;
        return;
    } 

    // Get the date of the month
    if (currentYear % 4 == 0 && fourthMonth == 2) {
        if (fourthDate == 29) {
            fifthDate = 1;
            fifthMonth = 3;
        }
        else {
            fifthDate = fourthDate += 1;
            fifthMonth = fourthMonth;
        }
    } else {
        if (fourthMonth == 1 | 3 | 5 | 7 | 8 | 10 | 12) {
            if (fourthDate == 31) {
                fifthDate = 1;
                fifthMonth = fourthMonth += 1;
            }
            else {
                fifthDate = fourthDate += 1;
                fifthMonth = fourthMonth;
            }
        } else if (fourthMonth == 4 | 6 | 9 | 11) {
            if (fourthDate == 30) {
                fifthDate = 1;
                fifthMonth = fourthMonth += 1;
            } else {
                fifthDate = fourthDate += 1;
                fifthMonth = fourthMonth;
            }
        } else {
            if (fourthDate == 28) {
                fifthDate = 1;
                fifthMonth = fourthMonth += 1;
            } else {
                fifthDate = fourthDate += 1;
                fifthMonth = fourthMonth;
            }
        }
    }

    day5 = weekdayNames[fifthDay] + " " + fifthDate + "/" + fifthMonth;
}

function getSixthDay() {
    sixthDay;
    sixthDate;
    sixthMonth;

    // Get the day of the week
    if (fifthDay == 6)
    {
        sixthDay = 0;
    } else {
        sixthDay = fifthDay += 1;
    }

    // Handles the last day of the year
    if (fifthMonth == 12 & fifthDate == 31) {
        sixthDate = 1;
        sixthMonth = 1;
        day6 = weekdayNames[sixthDay] + " " + sixthDate + "/" + sixthMonth;
        return;
    } 

    // Get the date of the month
    if (currentYear % 4 == 0 && fifthMonth == 2) {
        if (fifthDate == 29) {
            sixthDate = 1;
            sixthMonth = 3;
        }
        else {
            sixthDate = fifthDate += 1;
            sixthMonth = fifthMonth;
        }
    } else {
        if (fifthMonth == 1 | 3 | 5 | 7 | 8 | 10 | 12) {
            if (fifthDate == 31) {
                sixthDate = 1;
                sixthMonth = fifthMonth += 1;
            }
            else {
                sixthDate = fifthDate += 1;
                sixthMonth = fifthMonth;
            }
        } else if (fifthMonth == 4 | 6 | 9 | 11) {
            if (fifthDate == 30) {
                sixthDate = 1;
                sixthMonth = fifthMonth += 1;
            } else {
                sixthDate = fifthDate += 1;
                sixthMonth = fifthMonth;
            }
        } else {
            if (fifthDate == 28) {
                sixthDate = 1;
                sixthMonth = fifthMonth += 1;
            } else {
                sixthDate = fifthDate += 1;
                sixthMonth = fifthMonth;
            }
        }
    }

    day6 = weekdayNames[sixthDay] + " " + sixthDate + "/" + sixthMonth;
}

function getSeventhDay() {
    seventhDay;
    seventhDate;
    seventhMonth;

    // Get the day of the week
    if (sixthDay == 6)
    {
        seventhDay = 0;
    } else {
        seventhDay = sixthDay += 1;
    }

    // Handles the last day of the year
    if (sixthMonth == 12 & sixthDate == 31) {
        seventhDate = 1;
        seventhMonth = 1;
        day7 = weekdayNames[seventhDay] + " " + seventhDate + "/" + seventhMonth;
        return;
    } 

    // Get the date of the month
    if (currentYear % 4 == 0 && sixthMonth == 2) {
        if (sixthDate == 29) {
            seventhDate = 1;
            seventhMonth = 3;
        }
        else {
            seventhDate = sixthDate += 1;
            seventhMonth = sixthMonth;
        }
    } else {
        if (sixthMonth == 1 | 3 | 5 | 7 | 8 | 10 | 12) {
            if (sixthDate == 31) {
                seventhDate = 1;
                seventhMonth = sixthMonth += 1;
            }
            else {
                seventhDate = sixthDate += 1;
                seventhMonth = sixthMonth;
            }
        } else if (sixthMonth == 4 | 6 | 9 | 11) {
            if (sixthDate == 30) {
                seventhDate = 1;
                seventhMonth = sixthMonth += 1;
            } else {
                seventhDate = sixthDate += 1;
                seventhMonth = sixthMonth;
            }
        } else {
            if (sixthDate == 28) {
                seventhDate = 1;
                seventhMonth = sixthMonth += 1;
            } else {
                seventhDate = sixthDate += 1;
                seventhMonth = sixthMonth;
            }
        }
    }

    day7 = weekdayNames[seventhDay] + " " + seventhDate + "/" + seventhMonth;

    updateWeatherDays();
}

// Gets data from the weather API and stores it in variables
function getWeatherDataFromAPI() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=55.676098&longitude=12.568337&daily=weather_code,temperature_2m_max,sunrise,sunset,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=Europe%2FLondon&forecast_hours=1")
    .then(response => {
        if (!response.ok) {
            document.getElementById("updateButton").innerHTML = "An error occurred, try again later";
            throw new Error("Did not receive a response from network");
        }
        return response.json();
    })
    .then(data => {
        // Temperatures
        temperature1 = data.daily.temperature_2m_max[0];
        temperature2 = data.daily.temperature_2m_max[1];
        temperature3 = data.daily.temperature_2m_max[2];
        temperature4 = data.daily.temperature_2m_max[3];
        temperature5 = data.daily.temperature_2m_max[4];
        temperature6 = data.daily.temperature_2m_max[5];
        temperature7 = data.daily.temperature_2m_max[6];

        // Weather condition
        weatherCondition1 = data.daily.weather_code[0];
        weatherCondition2 = data.daily.weather_code[1];
        weatherCondition3 = data.daily.weather_code[2];
        weatherCondition4 = data.daily.weather_code[3];
        weatherCondition5 = data.daily.weather_code[4];
        weatherCondition6 = data.daily.weather_code[5];
        weatherCondition7 = data.daily.weather_code[6];

        // Wind direction
        windDirection1 = data.daily.wind_direction_10m_dominant[0];
        windDirection2 = data.daily.wind_direction_10m_dominant[1];
        windDirection3 = data.daily.wind_direction_10m_dominant[2];
        windDirection4 = data.daily.wind_direction_10m_dominant[3];
        windDirection5 = data.daily.wind_direction_10m_dominant[4];
        windDirection6 = data.daily.wind_direction_10m_dominant[5];
        windDirection7 = data.daily.wind_direction_10m_dominant[6];

        // Wind speed
        windSpeed1 = data.daily.wind_speed_10m_max[0];
        windSpeed2 = data.daily.wind_speed_10m_max[1];
        windSpeed3 = data.daily.wind_speed_10m_max[2];
        windSpeed4 = data.daily.wind_speed_10m_max[3];
        windSpeed5 = data.daily.wind_speed_10m_max[4];
        windSpeed6 = data.daily.wind_speed_10m_max[5];
        windSpeed7 = data.daily.wind_speed_10m_max[6];

        // Precipitation
        precipitation1 = data.daily.rain_sum[0];
        precipitation2 = data.daily.rain_sum[1];
        precipitation3 = data.daily.rain_sum[2];
        precipitation4 = data.daily.rain_sum[3];
        precipitation5 = data.daily.rain_sum[4];
        precipitation6 = data.daily.rain_sum[5];
        precipitation7 = data.daily.rain_sum[6];

        // Sunrise
        sunrise1 = data.daily.sunrise[0];
        sunrise2 = data.daily.sunrise[1];
        sunrise3 = data.daily.sunrise[2];
        sunrise4 = data.daily.sunrise[3];
        sunrise5 = data.daily.sunrise[4];
        sunrise6 = data.daily.sunrise[5];
        sunrise7 = data.daily.sunrise[6];

        // Sunset
        sunset1 = data.daily.sunset[0];
        sunset2 = data.daily.sunset[1];
        sunset3 = data.daily.sunset[2];
        sunset4 = data.daily.sunset[3];
        sunset5 = data.daily.sunset[4];
        sunset6 = data.daily.sunset[5];
        sunset7 = data.daily.sunset[6];

        loadTemperature();
        loadWeatherCondition();
        loadWindDirection();
        loadWindSpeed();
        loadPrecipitation();
        loadSunriseTime();
        loadSunsetTime();
    })
    .catch(error => {
        console.error("There was an operation with the fetch operation", error);
    });
}

function loadTemperature() {
    document.getElementById("temp1").innerHTML = temperature1;
    document.getElementById("temp2").innerHTML = temperature2;
    document.getElementById("temp3").innerHTML = temperature3;
    document.getElementById("temp4").innerHTML = temperature4;
    document.getElementById("temp5").innerHTML = temperature5;
    document.getElementById("temp6").innerHTML = temperature6;
    document.getElementById("temp7").innerHTML = temperature7;
}

function loadWeatherCondition() {
    document.getElementById("weather1").innerHTML = changeWeatherFromCode(weatherCondition1);
    document.getElementById("weather2").innerHTML = changeWeatherFromCode(weatherCondition2);
    document.getElementById("weather3").innerHTML = changeWeatherFromCode(weatherCondition3);
    document.getElementById("weather4").innerHTML = changeWeatherFromCode(weatherCondition4);
    document.getElementById("weather5").innerHTML = changeWeatherFromCode(weatherCondition5);
    document.getElementById("weather6").innerHTML = changeWeatherFromCode(weatherCondition6);
    document.getElementById("weather7").innerHTML = changeWeatherFromCode(weatherCondition7);
}

// Changes the weather condition from a number weather code, to a string weather code
function changeWeatherFromCode(weatherCode) {
    switch (weatherCode) {
        case 0:
            return weatherCode = "Sunny"
            break;
        case 1: case 2: case 3: 
            return weatherCode = "Cloudy";
            break; 
        case 45: case 48:
            return weatherCode = "Foggy";
            break;
        case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67:
            return weatherCode = "Rainy";
            break;
        case 71: case 73: case 75: case 77:
            return weatherCode = "Snowy";
            break;
        case 80: case 81: case 82:
            return weatherCode = "Heavy rain";
            break;
        case 85: case 86: 
            return weatherCode = "Heavy snow";
            break;
        case 95: case 96: case 99:
            return weatherCode = "Thunder";
            break;
        default:
            return weatherCode = undefined;
    }
}

function loadWindDirection() {
    document.getElementById("windDir1").innerHTML = changeWindToCardinal(windDirection1);
    document.getElementById("windDir2").innerHTML = changeWindToCardinal(windDirection2);
    document.getElementById("windDir3").innerHTML = changeWindToCardinal(windDirection3);
    document.getElementById("windDir4").innerHTML = changeWindToCardinal(windDirection4);
    document.getElementById("windDir5").innerHTML = changeWindToCardinal(windDirection5);
    document.getElementById("windDir6").innerHTML = changeWindToCardinal(windDirection6);
    document.getElementById("windDir7").innerHTML = changeWindToCardinal(windDirection7);
}

// Changes wind from degrees to cardinal values
function changeWindToCardinal(wind) {
    if (wind > (360-11.25) || wind <= (0+11.25)) {
        wind = "N";
        return wind;
    }
    else if (wind > (22.5-11.25) || wind <= (22.5+11.25)) {
        wind = "NNE";
        return wind;
    }
    else if (wind > (45-11.25) || wind <= (45+11.25)) {
        wind = "NE";
        return wind;
    }
    else if (wind > (67.5-11.25) || wind <= (67.5+11.25)) {
        wind = "ENE";
        return wind;
    }
    else if (wind > (90-11.25) || wind <= (90+11.25)) {
        wind = "E";
        return wind;
    }
    else if (wind > (112.5-11.25) || wind <= (112.5+11.25)) {
        wind = "ESE";
        return wind;
    }
    else if (wind > (135-11.25) || wind <= (135+11.25)) {
        wind = "SE";
        return wind;
    }
    else if (wind > (157.5-11.25) || wind <= (157.5+11.25)) {
        wind = "SSE";
        return wind;
    }
    else if (wind > (180-11.25) || wind <= (180+11.25)) {
        wind = "S";
        return wind;
    }
    else if (wind > (202.5-11.25) || wind <= (202.5+11.25)) {
        wind = "SSW";
        return wind;
    }
    else if (wind > (225-11.25) || wind <= (225+11.25)) {
        wind = "SW";
        return wind;
    }
    else if (wind > (247.5-11.25) || wind <= (247.5+11.25)) {
        wind = "WSW";
        return wind;
    }
    else if (wind > (270-11.25) || wind <= (270+11.25)) {
        wind = "W";
        return wind;
    }
    else if (wind > (292.5-11.25) || wind <= (292.5+11.25)) {
        wind = "WNW";
        return wind;
    }
    else if (wind > (315-11.25) || wind <= (315+11.25)) {
        wind = "NW";
        return wind;
    }
    else if (wind > (337.5-11.25) || wind <= (337.5+11.25)) {
        wind = "NNW";
        return wind;
    }
}

function loadWindSpeed() {
    document.getElementById("windSp1").innerHTML = windSpeed1;
    document.getElementById("windSp2").innerHTML = windSpeed2;
    document.getElementById("windSp3").innerHTML = windSpeed3;
    document.getElementById("windSp4").innerHTML = windSpeed4;
    document.getElementById("windSp5").innerHTML = windSpeed5;
    document.getElementById("windSp6").innerHTML = windSpeed6;
    document.getElementById("windSp7").innerHTML = windSpeed7;
}

function loadPrecipitation() {
    document.getElementById("prec1").innerHTML = precipitation1;
    document.getElementById("prec2").innerHTML = precipitation2;
    document.getElementById("prec3").innerHTML = precipitation3;
    document.getElementById("prec4").innerHTML = precipitation4;
    document.getElementById("prec5").innerHTML = precipitation5;
    document.getElementById("prec6").innerHTML = precipitation6;
    document.getElementById("prec7").innerHTML = precipitation7;
}

function loadSunriseTime() {
    document.getElementById("sunrise1").innerHTML = getSunTime(sunrise1);
    document.getElementById("sunrise2").innerHTML = getSunTime(sunrise2);
    document.getElementById("sunrise3").innerHTML = getSunTime(sunrise3);
    document.getElementById("sunrise4").innerHTML = getSunTime(sunrise4);
    document.getElementById("sunrise5").innerHTML = getSunTime(sunrise5);
    document.getElementById("sunrise6").innerHTML = getSunTime(sunrise6);
    document.getElementById("sunrise7").innerHTML = getSunTime(sunrise7);
}

function getSunTime(sun) {
    let pureTime;
    // Extracts the substring of the string, from the 5th last character
    pureTime = sun.slice(-5);
    return pureTime;
}

function loadSunsetTime() {
    document.getElementById("sunset1").innerHTML = getSunTime(sunset1);
    document.getElementById("sunset2").innerHTML = getSunTime(sunset2);
    document.getElementById("sunset3").innerHTML = getSunTime(sunset3);
    document.getElementById("sunset4").innerHTML = getSunTime(sunset4);
    document.getElementById("sunset5").innerHTML = getSunTime(sunset5);
    document.getElementById("sunset6").innerHTML = getSunTime(sunset6);
    document.getElementById("sunset7").innerHTML = getSunTime(sunset7);
}

function updateWeatherDays() {
    document.getElementById("day1").innerHTML = day1;
    document.getElementById("day2").innerHTML = day2;
    document.getElementById("day3").innerHTML = day3;
    document.getElementById("day4").innerHTML = day4;
    document.getElementById("day5").innerHTML = day5;
    document.getElementById("day6").innerHTML = day6;
    document.getElementById("day7").innerHTML = day7;
}
