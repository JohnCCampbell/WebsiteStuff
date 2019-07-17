   document.getElementById("abc").innerHTML = "Squidward";

    var header = document.querySelector('header');
    var section = document.querySelector('section');

    //var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

    var requestURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';



    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

   document.getElementById("abc").innerHTML = "caaa";

    request.onload = function() {
        document.getElementById("abc").innerHTML = "1";
      var superHeroesText = request.response;
        document.getElementById("abc").innerHTML = "2";
      var Earthquake = superHeroesText;
      //var superHeroes = JSON.parse(superHeroesText);
        document.getElementById("abc").innerHTML = "3";
    //var features =[];
    features = Earthquake.features;    
        populateHeader(Earthquake);
        document.getElementById("abc").innerHTML = "4";
        //showHeroes(superHeroes);

        
        //var membos = superHeroes.members;
        //var name = membos[0].name;
        document.getElementById("abc").innerHTML = "charizard";
        document.getElementById("abc").innerHTML = Earthquake.defaults;
        document.getElementById("abc").innerHTML = "squirtle";
        document.getElementById("abc").innerHTML = features;
        document.getElementById("abc").innerHTML = "venosaur";
        
        document.getElementById("abc").innerHTML = Earthquake.features.properties.updated;
    }

    
    function populateHeader(jsonObj) {
                document.getElementById("abc").innerHTML = "5";
      var myH1 = document.createElement('h1');
                document.getElementById("abc").innerHTML = "6";
      myH1.textContent = jsonObj['squadName'];
                document.getElementById("abc").innerHTML = "7";
      //header.appendChild(myH1);
                document.getElementById("abc").innerHTML = "8";

      //var myPara = document.createElement('p');
                document.getElementById("abc").innerHTML = "9";
     // myPara.textContent = 'Hometown: ' + jsonObj.homeTown + ' // Formed: ' + jsonObj.formed;
                document.getElementById("abc").innerHTML = "10";
      //header.appendChild(myPara);
                document.getElementById("abc").innerHTML = "11";

    }



 
/*
    function showHeroes(jsonObj) {
      var heroes = jsonObj['members'];

      for(var i = 0; i < heroes.length; i++) {
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
        for(var j = 0; j < superPowers.length; j++) {
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
    
    */

