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

// Air Moisture
var airMoisture1;
var airMoisture2;
var airMoisture3;
var airMoisture4;
var airMoisture5;
var airMoisture6;
var airMoisture7;

// Visibility
var visibility1;
var visibility2;
var visibility3;
var visibility4;
var visibility5;
var visibility6;
var visibility7;

// FUNCTIONS
// Updates all weather data
function updateWeatherData() {
    loadDataFromAPI();
    updateHTMLElements();
    startTimer();
}

// Gets data from the weather API and stores it in variables
function loadDataFromAPI() {
    loadTemperature();
    loadWeatherCondition();
    loadWindDirection();
    loadWindSpeed();
    loadPrecipitation();
    loadAirMoisture();
    loadVisibility();
}

function loadTemperature() {
    
}

function loadWeatherCondition() {
    
}

function loadWindDirection() {
    
}

function loadWindSpeed() {
    
}

function loadPrecipitation() {
    
}

function loadAirMoisture() {
    
}

function loadVisibility() {
    
}

// updates the front end to correspond to the pulled data from the weather API
function updateHTMLElements() {

}

// Starts a 60 seconds timer and sets the Update Weather Data button inactive during this time
function startTimer() {

}
