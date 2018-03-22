$(document).ready(function () {
function handleWeatherResponse(response,status,xhr){
            console.log(response);

            let forecast = response.query.results.channel.item.forecast;

            $("WeatherResults").empty();

             for(let i in forecast){
                    console.log(i + " " + forecast[i])
                    $("#WeatherResults").append(i + " " + JSON.stringify(forecast[i])+ "<br>")
                };

        }

        function weatherButtonClicked(){
            console.log("This button has been clicked")

            let city = "Chicago"
            var url =
            "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"
               + city +
               "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
               $.getJSON(url, handleWeatherResponse);
        }

        $("#WeatherClickButton").click(weatherButtonClicked);

})