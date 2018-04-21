var cel="C";
display();


 $("#unit").on("click",function(){
  if (cel=="C"){
    cel="F";
    display();
  }else{
    cel="C";
    display();
  }
});

function display(){
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat= position.coords.latitude;
    long=position.coords.longitude;
    var url = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long+"" ;
    $.getJSON(url, function(e){
     $("#city").html(e.name);
           if(cel=="F"){
         $("#temp").html("Temprature ----------<big>  "+e.main.temp*1.8+32+" F</big>");
         }else{
            $("#temp").html("Temprature ----------<big>  "+e.main.temp+" C</big>");
         }
      $("#sky").html("Sky Condition ----------  <big>  "+e.weather[0].main+"</big>");
      $("#humid").html("Humidity ---------- <big>  "+e.main.humidity+"%</big>");
 $("#card-img").attr("src",e.weather[0].icon);
  });
});
}}