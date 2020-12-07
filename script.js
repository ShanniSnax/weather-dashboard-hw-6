$(document).ready(function() {

    //create click function for city input 
    $("#search-button").on("click", function(){
        //save search to local storage
        cityArray = JSON.parse(localStorage.getItem("city")) || [];
        var searchVal = $("#search-bar").val();

        cityArray.push(searchVal);
        localStorage.setItem("city", JSON.stringify(cityArray));
        
        citySide(searchVal);
        oneDay(searchVal);
    });

    var cityArray = JSON.parse(localStorage.getItem("city")) || [];

    for (i = 0; i < cityArray.length; i++) {
        citySide(cityArray[i]);
    }

    function citySide(searchValFunc) {
        var oneCity = $("<li>").addClass("one-city").text(searchValFunc);
        $(".city-options").append(oneCity);

    }
    //ajax call for weather api first day then 5 day
    var apiKey = "cfc629980ed4c97de23c26092d3f19a3";

    function oneDay(cityName){
        var queryURL= `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: "json",
            success: function(data){
                console.log(data);
            }
        })

    }
    

    //ajax call for uv index

    //append data to said divs
        //create cards for 5 day forecast
});