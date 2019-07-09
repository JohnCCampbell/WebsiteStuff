var picture;
var on;
var off;
var state;



$(document).ready(function()       
{
    
    picture = document.getElementById("myImage");
    buttonFlick = document.getElementById("flick");
    thing = document.getElementById("words");
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
    /*
    
        var header = document.querySelector('header');
        var section = document.querySelector('section');
    
        var script = document.createElement('script');
        //script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
        var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
    
        request.onload = function() 
        {
            var superHeroes = request.response;
            populateHeader(superHeroes);
            showHeroes(superHeroes);
        }
    
    
        function populateHeader(jsonObj) 
        {
            var myH1 = document.createElement('h1');
            myH1.textContent = jsonObj['squadName'];
            header.appendChild(myH1);

            var myPara = document.createElement('p');
            myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
            header.appendChild(myPara);
        }
        
    
    function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
      
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
    
    
 
    
    
    
    
    
    
    
    
        
    
        document.getElementsByTagName('head')[0].appendChild(script);
    
       */
    
    
    
    
    
    
});
