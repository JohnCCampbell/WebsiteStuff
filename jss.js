var picture;
var on;
var off;
var state;




$(document).ready(function()       
{
    
    picture = document.getElementById("myImage");
    buttonFlick = document.getElementById("flick");
    //thing = document.getElementById("words");
    on = 'pic_bulbon.gif';
    off = 'pic_bulboff.gif';
    var garb = state;
    /*
    thing.innerHTML="JSS WORKS!";
    */
    $("#on").click(function()
        {
        document.getElementById("myImage").src= on;
        buttonFlick.innerHTML = "Flick off";
         
        });
    $("#off").click(function()
        {
        document.getElementById("myImage").src= off;
        buttonFlick.innerHTML = "Flick on";
        });
    $("#flick").click(function(c)
        {

        if(buttonFlick.innerHTML == "Flick off")
        {      
            document.getElementById("myImage").src= off;
            buttonFlick.innerHTML = "Flick on";
        }
        else
        {
            document.getElementById("myImage").src = on;
            buttonFlick.innerHTML = "Flick off";
        }
        });
});


    /*
    var section = document.querySelector('section');  


    var abc = document.getElementById('abc');   
    
    
    var requestURL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    abc.innerHTML = "hey1";

    request.onload = function() {
      var response = request.response;
      var ParseResponse = JSON.parse(response);
        document.getElementById("abc").innerHTML = "Squidward";
        
        var membos = ParseResponse.Feature;
      
        
        document.getElementById("abc").innerHTML = membos;
        abc.innerHTML = "hey221"
    }
    */

    /*
    var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
      var superHeroesText = request.response;
      var superHeroes = JSON.parse(superHeroesText);
        populateHeader(superHeroes);
        //showHeroes(superHeroes);
        document.getElementById("abc").innerHTML = "Squidward";
        abc.innerHTML = "ssss";
         
    }
    */
    
    
    
    
    

    //abc.innerHTML = "hey2";

      var JSONtext = request.response;
    //abc.innerHTML = "hey3";


    //thing.innerHTML = JSONtext['metadata']['mag'] + "pork";
        var ParsedText = JSON.parse(JSONtext);
    //abc.innerHTML = "hey4";


   // var b1 = ParsedText;
  //  ParsedText = b1;

document.getElementById("abc").innerHTML = myObj.age;


    
      request.onload = function() {
      var JSONtext = request.response;
      var ParsedText = JSON.parse(JSONtext);
      populateHeader(ParsedText);
      //showHeroes(ParsedText);
          
        thing.innerHTML = request.metadata.mag;
    
    }
      
        

    
    function populateHeader(jsonObj) {
        thing.innerHTML = "test2";
      var myH1 = document.createElement('h1');
      myH1.textContent = jsonObj['metadata']['mag'];
      section.appendChild(myH1);

      var myPara = document.createElement('p');
      myPara.textContent = 'Hometown: ' + jsonObj['FeatureCollection']['mag'] + ' // Formed: ' + jsonObj['metadata']['distance'];
      section.appendChild(myPara);

    }
    
//});
