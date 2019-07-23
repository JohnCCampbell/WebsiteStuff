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
    $("#flick").click(function()
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

