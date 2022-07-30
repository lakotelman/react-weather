weatherObj(
    data.name,
    Math.floor(temperatureConverter(data.main.temp)),
    toTitleCase(data.weather[0].description),
    data.weather[0].icon,
    Math.floor(temperatureConverter(data.main.temp_max)),
    Math.floor(temperatureConverter(data.main.temp_min)),
    data.main.humidity)

    const weatherObj = (
        city,
        temperature,
        forecast,
        icon,
        high,
        low,
        humidity
      ) => {
        city = {
          city,
          temperature: temperature,
          forecast: forecast,
          icon: `img src="http://openweathermap.org/img/wn/${icon}@2x.png"`,
          high: high,
          low: low,
          humidity: humidity,
        };
      };

      function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        return (valNum - 273.15) * 1.8 + 32;
      }
    
      function toTitleCase(str) {
        return str
          .toLowerCase()
          .split(" ")
          .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ");
      }
    