// Weather description and icon mapping
const weatherDescriptions = {
    "clearday": "Clear Day",
    "rain": "Rainy Day",
    "snow": "Snowy Day",
    "ts": "Thunderstorm",
    "clearnight": "Clear Night",
    "pcloudyday": "Partly Cloudy Day",
    "pcloudynight": "Partly Cloudy Night",
    "mcloudyday": "Mostly Cloudy Day",
    "mcloudynight": "Mostly Cloudy Night",
    "cloudynight": "Cloudy Night",
    "lightrain": "Light Rain",
    "lightsnownight": "Light Snow Night",
    "lightsnowday": "Light Snow Day",
    "lightrainnight": "Light Rain Night",
    "lightrainday": "Light Rain Day",
    "ishowerday": "Isolated Showers Day",
    "ishowernight": "Isolated Showers Night",
    "humidnight": "Humid Night",
    "humidday": "Humid Day",
    "windy": "Windy",
    "fog": "Foggy",
    "hail": "Hail",
    "cloudyday": "Cloudy Day",
    "oshowerday": "Occasional Showers Day",
    "oshowernight": "Occasional Showers Night"
};

// Fetch cities.json and populate dropdown
document.addEventListener("DOMContentLoaded", () => {
    const citySelect = document.getElementById("citySelect");
    const weatherSlider = document.getElementById("weatherSlider");
    const slideLeft = document.getElementById("slideLeft");
    const slideRight = document.getElementById("slideRight");

    const cardWidth = 250 + 20; // Card width (250px) + gap (20px)
    const maxScroll = weatherSlider.scrollWidth - weatherSlider.clientWidth;

    weatherSlider.scrollLeft = 0;

    // Sample cities
    const cities = [
        { "name": "New York, USA", "lat": 40.7128, "lon": -74.0060 },
        { "name": "Tokyo, Japan", "lat": 35.6895, "lon": 139.6917 },
        { "name": "Paris, France", "lat": 48.8566, "lon": 2.3522 },
        { "name": "Sydney, Australia", "lat": -33.8688, "lon": 151.2093 },
        { "name": "Cairo, Egypt", "lat": 30.0444, "lon": 31.2357 },
        { "name": "London, England", "lat": 51.5074, "lon": -0.1278 },
        { "name": "Dubai, UAE", "lat": 25.276987, "lon": 55.296249 },
        { "name": "Moscow, Russia", "lat": 55.7558, "lon": 37.6173 },
        { "name": "Mumbai, India", "lat": 19.0760, "lon": 72.8777 },
        { "name": "Mexico City, Mexico", "lat": 19.4326, "lon": -99.1332 },
        { "name": "Beijing, China", "lat": 39.9042, "lon": 116.4074 },
        { "name": "Seoul, South Korea", "lat": 37.5665, "lon": 126.9780 },
        { "name": "São Paulo, Brazil", "lat": -23.5505, "lon": -46.6333 },
        { "name": "Buenos Aires, Argentina", "lat": -34.6037, "lon": -58.3816 },
        { "name": "Istanbul, Turkey", "lat": 41.0082, "lon": 28.9784 },
        { "name": "Bangkok, Thailand", "lat": 13.7563, "lon": 100.5018 },
        { "name": "Lagos, Nigeria", "lat": 6.5244, "lon": 3.3792 },
        { "name": "Johannesburg, South Africa", "lat": -26.2041, "lon": 28.0473 },
        { "name": "Toronto, Canada", "lat": 43.651070, "lon": -79.347015 },
        { "name": "Los Angeles, USA", "lat": 34.0522, "lon": -118.2437 },
        { "name": "Madrid, Spain", "lat": 40.4168, "lon": -3.7038 },
        { "name": "Rome, Italy", "lat": 41.9028, "lon": 12.4964 },
        { "name": "Rio de Janeiro, Brazil", "lat": -22.9068, "lon": -43.1729 },
        { "name": "Berlin, Germany", "lat": 52.5200, "lon": 13.4050 },
        { "name": "Jakarta, Indonesia", "lat": -6.2088, "lon": 106.8456 },
        { "name": "Lima, Peru", "lat": -12.0464, "lon": -77.0428 },
        { "name": "Kuala Lumpur, Malaysia", "lat": 3.1390, "lon": 101.6869 },
        { "name": "Hanoi, Vietnam", "lat": 21.0285, "lon": 105.8542 },
        { "name": "Manila, Philippines", "lat": 14.5995, "lon": 120.9842 },
        { "name": "Singapore, Singapore", "lat": 1.3521, "lon": 103.8198 },
        { "name": "Karachi, Pakistan", "lat": 24.8607, "lon": 67.0011 },
        { "name": "Baghdad, Iraq", "lat": 33.3152, "lon": 44.3661 },
        { "name": "Riyadh, Saudi Arabia", "lat": 24.6336, "lon": 46.7152 },
        { "name": "Tehran, Iran", "lat": 35.6892, "lon": 51.3890 },
        { "name": "Nairobi, Kenya", "lat": -1.2921, "lon": 36.8219 },
        { "name": "Athens, Greece", "lat": 37.9838, "lon": 23.7275 },
        { "name": "Cape Town, South Africa", "lat": -33.9249, "lon": 18.4241 },
        { "name": "Budapest, Hungary", "lat": 47.4979, "lon": 19.0402 },
        { "name": "Hong Kong, China", "lat": 22.3193, "lon": 114.1694 },
        { "name": "Vienna, Austria", "lat": 48.2082, "lon": 16.3738 },
        { "name": "Stockholm, Sweden", "lat": 59.3293, "lon": 18.0686 },
        { "name": "Warsaw, Poland", "lat": 52.2297, "lon": 21.0122 },
        { "name": "Santiago, Chile", "lat": -33.4489, "lon": -70.6693 },
        { "name": "Montreal, Canada", "lat": 45.5017, "lon": -73.5673 },
        { "name": "San Francisco, USA", "lat": 37.7749, "lon": -122.4194 },
        { "name": "Washington, D.C., USA", "lat": 38.9072, "lon": -77.0369 },
        { "name": "Melbourne, Australia", "lat": -37.8136, "lon": 144.9631 },
        { "name": "Zürich, Switzerland", "lat": 47.3769, "lon": 8.5417 },
        { "name": "Copenhagen, Denmark", "lat": 55.6761, "lon": 12.5683 },
        { "name": "Brussels, Belgium", "lat": 50.8503, "lon": 4.3517 },
        { "name": "Oslo, Norway", "lat": 59.9139, "lon": 10.7522 },
        { "name": "Helsinki, Finland", "lat": 60.1699, "lon": 24.9384 },
        { "name": "Dublin, Ireland", "lat": 53.3498, "lon": -6.2603 },
        { "name": "Barcelona, Spain", "lat": 41.3851, "lon": 2.1734 },
        { "name": "Edinburgh, Scotland", "lat": 55.9533, "lon": -3.1883 },
        { "name": "Vancouver, Canada", "lat": 49.2827, "lon": -123.1207 },
        { "name": "Lisbon, Portugal", "lat": 38.7169, "lon": -9.1399 },
        { "name": "Prague, Czech Republic", "lat": 50.0755, "lon": 14.4378 },
        { "name": "Seville, Spain", "lat": 37.3886, "lon": -5.9823 },
        { "name": "Munich, Germany", "lat": 48.1351, "lon": 11.5820 },
        { "name": "Brasília, Brazil", "lat": -15.8267, "lon": -47.9218 },
        { "name": "Tunis, Tunisia", "lat": 36.8065, "lon": 10.1815 },
        { "name": "Lyon, France", "lat": 45.7640, "lon": 4.8357 },
        { "name": "Brisbane, Australia", "lat": -27.4698, "lon": 153.0251 }
    ];

   // Populate Dropdown
   cities.forEach(city => {
    const option = document.createElement("option");
    option.value = JSON.stringify({ lat: city.lat, lon: city.lon });
    option.textContent = city.name;
    citySelect.appendChild(option);
});

// Event Listener for City Selection
citySelect.addEventListener("change", () => {
    const { lat, lon } = JSON.parse(citySelect.value);
    fetchWeather(lat, lon);
});

// Get card width dynamically (includes card + gap)
function getCardWidth() {
    const card = document.querySelector(".forecast-card");
    return card ? card.offsetWidth + 20 : 270; // Default width + gap if card not loaded
}

// Fetch Weather Data
function fetchWeather(lat, lon) {
    const apiUrl = `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            console.error("Error fetching data:", error);
            weatherDataDiv.innerHTML = "<p>Failed to fetch weather data.</p>";
        });
}

function displayWeather(data) {
    weatherSlider.innerHTML = ""; // Clear previous data
    const forecast = data.dataseries;

    forecast.slice(0, 10).forEach((item, index) => {
        const date = new Date();
        date.setDate(date.getDate() + index);

        const weatherCode = item.weather || "clear"; // Default to clear
        console.log("Weather Code:", weatherCode); // Debugging output

        const tempC = item.temp2m;
        const tempF = Math.round((tempC * 9 / 5) + 32);
        const weatherDescription = weatherDescriptions[weatherCode] || "Unknown Condition";
        const iconUrl = getWeatherIcon(weatherCode);

        weatherSlider.innerHTML += `
            <div class="forecast-card">
                <p><strong>${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</strong></p>
                <img src="${iconUrl}" alt="${weatherDescription}" 
                    onerror="this.src='https://img.icons8.com/color/48/sun.png'">
                <p>${weatherDescription}</p>
                <p><strong>${tempC}°C / ${tempF}°F</strong></p>
            </div>
        `;
    });
}


function getWeatherIcon(weatherCode) {
    const iconMap = {
        "clearday": "01d",            // Clear Day
        "clearnight": "01n",          // Clear Night
        "pcloudyday": "02d",          // Partly Cloudy Day
        "pcloudynight": "02n",        // Partly Cloudy Night
        "mcloudyday": "03d",          // Mostly Cloudy Day
        "mcloudynight": "03n",        // Mostly Cloudy Night
        "cloudyday": "04d",           // Cloudy Day
        "cloudynight": "04n",         // Cloudy Night
        "rain": "10d",                // Rainy Day
        "lightrain": "09d",           // Light Rain Day
        "lightrainday": "09d",        // Light Rain Day
        "lightrainnight": "09n",      // Light Rain Night
        "ishowerday": "09d",          // Isolated Showers Day
        "ishowernight": "09n",        // Isolated Showers Night
        "oshowerday": "10d",          // Occasional Showers Day
        "oshowernight": "10n",        // Occasional Showers Night
        "snow": "13d",                // Snowy Day
        "lightsnowday": "13d",        // Light Snow Day
        "lightsnownight": "13n",      // Light Snow Night
        "ts": "11d",                  // Thunderstorm
        "hail": "13d",                // Hail (same as Snow icon as fallback)
        "windy": "50d",               // Windy Day (Mist icon used as default)
        "fog": "50d",                 // Foggy Day
        "humidday": "02d",            // Humid Day (Partly Cloudy)
        "humidnight": "02n"           // Humid Night (Partly Cloudy Night)    
    };

    return `https://openweathermap.org/img/wn/${iconMap[weatherCode] || "01d"}@2x.png`;
}


// Sliding functionality
slideLeft.addEventListener("click", () => {
    weatherSlider.scrollLeft -= getCardWidth(); // Scroll one card left
});

slideRight.addEventListener("click", () => {
    weatherSlider.scrollLeft += getCardWidth(); // Scroll one card right
});

});