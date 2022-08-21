var map, recentPin, infobox, nameToCoord, purpleBoxPins, recentTarget, recentTargetCopy;

getMap = () => {
    //generate map
    map = new Microsoft.Maps.Map(document.getElementById('map'), {showLocateMeButton: false, zoom: 11});
    //creating all the pins for purple box locations
    //https://www.google.com/maps/d/u/0/viewer?mid=1lIVbhj5-z6Zs1rLfCXQZX7Pk1K0EIDEf&ll=38.24094802219508%2C-76.17895922623406&z=7
    nameToCoord = {"S Royal St & Jones Point Dr, Alexandria, VA 22314": new Microsoft.Maps.Location(38.794286797058, -77.04583629153166),
                    "4251 Eisenhower Ave, Alexandria, VA 22304": new Microsoft.Maps.Location(38.80445703329498, -77.10794453305691),
                    "3224 Colvin St, Alexandria, VA 22314": new Microsoft.Maps.Location(38.80683966134874, -77.08626000202374),
                    "Tower Ct & S Whiting St, Alexandria, VA 22304": new Microsoft.Maps.Location(38.814294359539936, -77.13652541480593),
                    "Arlandria Shopping Center, 3831 Mt Vernon Ave, Alexandria, VA 22305": new Microsoft.Maps.Location(38.84121968144131, -77.06264124819273),
                    "4618 West Ox Rd, Fairfax, VA 22030": new Microsoft.Maps.Location(38.85142792698283, -77.37817408953775),
                    "9850 Furnace Rd, Lorton, VA 22079": new Microsoft.Maps.Location(38.6959033331262, -77.24129125834335),
                    "2511 Parkers Ln, Alexandria, VA 22306": new Microsoft.Maps.Location(38.74169154819965, -77.07671253337465),
                    "6140 Rolling Rd, West Springfield, VA 22152": new Microsoft.Maps.Location(38.78321808351559, -77.23739230046466),
                    "6507 Columbia Pike, Annandale, VA 22003": new Microsoft.Maps.Location(38.8374832748058, -77.16375683037434),
                    "4900 Stonecroft Blvd, Chantilly, VA 20151": new Microsoft.Maps.Location(38.87124548562296, -77.45168363085844),
                    "3001 Vaden Dr, Fairfax, VA 22031": new Microsoft.Maps.Location(38.87314853237443, -77.27226883085837),
                    "6121 Franconia Rd, Alexandria, VA 22310": new Microsoft.Maps.Location(38.78088283412355, -77.14788720202452),
                    "12000 Government Center Pkwy, Fairfax, VA 22035": new Microsoft.Maps.Location(38.854101189654216, -77.35664367504206),
                    "2531 Reston Pkwy, Herndon, VA 20191": new Microsoft.Maps.Location(38.92655757002699, -77.37192047744858),
                    "1244 Oak Ridge Ave, McLean, VA 22101": new Microsoft.Maps.Location(38.93929159940969, -77.18495954030274),
                    "9830 VA-193, Great Falls, VA 22066": new Microsoft.Maps.Location(38.99833205967045, -77.28695863199749),
                    "8100 Braddock Road, Annandale, VA 22003": new Microsoft.Maps.Location(38.8178938736173, -77.22295948293193),
                    "11300 Baron Cameron Ave, Reston, VA 20190": new Microsoft.Maps.Location(38.975522286129895, -77.33568043489682),
                    "2334 Gallows Rd, Vienna, VA 22182": new Microsoft.Maps.Location(38.89608616059589, -77.22570137245224),
                    "6601 Telegraph Rd, Alexandria, VA 22310": new Microsoft.Maps.Location(38.77354554054051, -77.10556643263172),
                    "14811 Dumfries Rd, Manassas, VA 20112": new Microsoft.Maps.Location(38.635521834797984, -77.42628667044738),
                    "13000 Balls Ford Rd, Manassas, VA 20109": new Microsoft.Maps.Location(38.788477733546785, -77.56333651398612),
                    "4603 James Madison Hwy, Haymarket, VA 20169": new Microsoft.Maps.Location(38.853515370283105, -77.63680157570666),
                    "15941 Donald Curtis Dr, Woodbridge, VA 22191": new Microsoft.Maps.Location(38.60890190108457, -77.29428430253977),
                    "1 County Complex Ct, Woodbridge, VA 22192": new Microsoft.Maps.Location(38.67930707509905, -77.34894539069087),
                    "2800 S Taylor St, Arlington, VA 22206": new Microsoft.Maps.Location(38.84093744961002, -77.09252810322752),
                    "1021 N Quincy St, Arlington, VA 22201": new Microsoft.Maps.Location(38.88464691369519, -77.10674149645413),
                    "735 18th St S, Arlington, VA 22202": new Microsoft.Maps.Location(38.85728372832081, -77.05904876894552),
                    "2190 Military Rd, Arlington, VA 22207": new Microsoft.Maps.Location(38.89860218152463, -77.10946492483754),
                    "5722 Lee Hwy, Arlington, VA 22207": new Microsoft.Maps.Location(38.89475747139879, -77.14308998391193),
                    "1479 Sterling Rd, Herndon, VA 20170": new Microsoft.Maps.Location(38.97536172390106, -77.40804260295766),
                    "431 Mill St NE, Vienna, VA 22180": new Microsoft.Maps.Location(38.906393518276765, -77.2685114543129),
                    "217 Gordon Rd, Falls Church, VA 22046": new Microsoft.Maps.Location(38.89252438224921, -77.1901899147516),
                    "10700 Page Ave, Fairfax, VA 22030": new Microsoft.Maps.Location(38.84598247154976, -77.3150957193354),
                    "489 Eskimo Hill Rd, Stafford, VA 22554": new Microsoft.Maps.Location(38.38078906496781, -77.41339608440948),
                    "1200 Belman Rd, Fredericksburg, VA 22401": new Microsoft.Maps.Location(38.28670563616255, -77.46405613173957),
                    "38159 W Colonial Hwy, Hamilton, VA 20158": new Microsoft.Maps.Location(39.135455131332506, -77.68298314232676),
                    "21101 Evergreen Mills Rd, Leesburg, VA 20175": new Microsoft.Maps.Location(39.03699803459253, -77.5817082018563),
                    "400 W Laurel Ave, Sterling, VA 20164": new Microsoft.Maps.Location(39.010891667353505, -77.40137908522439),
                    "24244 Stone Springs Blvd, Sterling, VA 20166": new Microsoft.Maps.Location(38.948126716789716, -77.53704309764771),
                    "Carters Farm Ln, Virginia 20117": new Microsoft.Maps.Location(38.98543465873438, -77.69413221550855),
                    "36560 Jeb Stuart Rd, Purcellville, VA 20132": new Microsoft.Maps.Location(39.056785326409106, -77.73981150006978),
                    "1204 Jolly Pond Rd, Williamsburg, VA 23188": new Microsoft.Maps.Location(37.325335431629156, -76.81855433069292),
                    "117 Tewning Rd, Williamsburg, VA 23188": new Microsoft.Maps.Location(37.28520632278347, -76.73958062704342),
                    "185 Industrial Blvd, Toano, VA 23168": new Microsoft.Maps.Location(37.38695120932578, -76.7957654395166)};
    purpleBoxPins = [];
    for (const name in nameToCoord) {
        //unpack the name and location from a purple box location
        var loc = nameToCoord[name];
        //create infobox but don't show it
        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {visible: false});
        //assign infobox to map
        infobox.setMap(map);
        //create pushpin
        var pin = new Microsoft.Maps.Pushpin(loc);
        //store pin data
        pin.metadata = {title: name};
        //add a click listener to pin
        Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
        //show the pushpin
        map.entities.push(pin);
        //set up a list of purpleBoxPins for future memory
        purpleBoxPins.push(pin);
    }
    //generating the auto-suggest box
    Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
        var manager = new Microsoft.Maps.AutosuggestManager({map: map});
        manager.attachAutosuggest(document.getElementById('searchBox'), document.getElementById('searchBoxContainer'), selectedSuggestion);
    });
}

selectedSuggestion = (result) => {
    //ensure that a possible route is gone
    document.getElementById("route").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    //make sure to switch red pins back to purple
    if (typeof recentTarget !== 'undefined') {
        map.entities.remove(recentTargetCopy);
        map.entities.push(recentTarget);
    }
    //remove previously selected suggestion from the map
    if (typeof recentPin !== 'undefined') {
        map.entities.remove(recentPin);
    }
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {visible: false});
    infobox.setMap(map);
    var pin = new Microsoft.Maps.Pushpin(result.location, {color: 'green'});
    pin.metadata = {title: result["formattedSuggestion"]};
    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
    //set new pin as the recent suggestion to remove if a new suggestion is inputted
    recentPin = pin;
    //show pin and center map over it
    map.entities.push(pin);
    map.setView({center: result.location, zoom: 13});
    //update the searchbox to reflect the autofill suggestion
    document.getElementById("searchBox").value = result["formattedSuggestion"];
}

getUserLocation = () => {
    //ensure that a possible route is gone
    document.getElementById("route").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    //make sure to switch red pins back to purple
    if (typeof recentTarget !== 'undefined') {
        map.entities.remove(recentTargetCopy);
        map.entities.push(recentTarget);
    }
    //get location of user
    navigator.geolocation.getCurrentPosition(function (position) {
        if (typeof recentPin !== 'undefined') {
            map.entities.remove(recentPin);
        }
        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {visible : false});
        infobox.setMap(map);
        //grab location from the position of user
        var loc = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
        var pin = new Microsoft.Maps.Pushpin(loc, {color : 'green'});
        var coords = `${position.coords.latitude}, ${position.coords.longitude}`;
        //grab an address from the coordinates
        var url = `https://dev.virtualearth.net/REST/v1/Locations/${coords}?includeEntityTypes=&o=json&key=Am8ryQPYHCOfmbeh9Uk6tulI8N1xFN-Ab9DRLdmRbDtaJ8SFj1U00pU5LW9xzzac`;
        var name;
        fetch(url)
        .then(res => res.json())
        .then((out) => {
            for (const tempList of out["resourceSets"][0]["resources"]) {
                if ((typeof name) == "undefined") {
                    if ("confidence" in tempList) {
                        if (tempList["confidence"] = "Low") {
                            if ("name" in tempList) {
                                name = tempList["name"];
                            }
                        }
                    }
                }
            }
            //set the description of the pin and the searchbox to either the coordinates, or the address name if it is there
            if ((typeof name) == "undefined") {
                document.getElementById("searchBox").value = coords;
                pin.metadata = {title: coords};
            }
            else {
                document.getElementById("searchBox").value = name;
                pin.metadata = {title: name};
            }
            Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
            recentPin = pin;
            map.entities.push(pin);
            map.setView({center : loc, zoom : 13});
        })
        .catch(err => { 
            par.innerHTML = "Please enter in a valid address";
            throw err 
        });
    });
}

pushpinClicked = (e) => {
    //make sure the infobox has metadata to display
    if (e.target.metadata) {
        //set up the infobox with the metadata and display it
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}

nearestPurpleBox = () => {
    if (typeof recentPin !== 'undefined') {
        //clear any possible warnings and make sure the searchBox is consistent with the search being parsed
        document.getElementById("warning").innerHTML = "";
        document.getElementById("searchBox").value = recentPin["metadata"]["title"];
        //find the driving time between the user's location and all the purple box locations
        var tryFetches = [];
        for (const name in nameToCoord) {
            var coord = nameToCoord[name];
            var url = `https://www.mapquestapi.com/directions/v2/route?key=VKua6PnHz9fnb1zIAmrBBwQ6NiuB2XTt&from=${recentPin["geometry"]["y"]},${recentPin["geometry"]["x"]}&to=${coord["latitude"]},${coord["longitude"]}`;
            const fetchReq = fetch(url)
            .then(res => res.json());
            tryFetches.push(fetchReq);
        }
        const allTryFetches = Promise.all(tryFetches);
        allTryFetches.then((out) => {
            //find the purple box location with the shortest driving time
            var minTime = 1000000;
            var minNum = -1;
            var i = 0;
            for (const temp of Object.values(out)) {
                if ("route" in temp) {
                    if ("realTime" in temp["route"]) {
                        var time = temp["route"]["realTime"];
                        if (time < minTime) {
                            minTime = time;
                            minNum = i;
                        }
                    }
                }
                i++;
            }
            //display the nearest purple box location and a google maps direction link
            var names = Object.keys(nameToCoord);
            var coords = Object.values(nameToCoord);
            var googleUrl = `https://www.google.com/maps/dir/${recentPin["geometry"]["y"]},${recentPin["geometry"]["x"]}/${coords[minNum]["latitude"]},${coords[minNum]["longitude"]}/`;
            document.getElementById("result").innerHTML = `Nearest Purple Box location: ${names[minNum]}<br><a href="${googleUrl}" target="_blank">Google Directions</a>`;
            //display the route in an image above the map
            var routeUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes?wp.0=${recentPin["geometry"]["y"]},${recentPin["geometry"]["x"]}&wp.1=${coords[minNum]["latitude"]},${coords[minNum]["longitude"]}&key=Am8ryQPYHCOfmbeh9Uk6tulI8N1xFN-Ab9DRLdmRbDtaJ8SFj1U00pU5LW9xzzac`;
            document.getElementById("route").innerHTML = `<img src=${routeUrl}\>`;
            //set the target pin as red, and store it as the most recent target
            var target = purpleBoxPins[minNum];
            map.entities.remove(target);
            var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(target["geometry"]["y"], target["geometry"]["x"]), {color: 'red'});
            pin.metadata = {title: target["metadata"]["title"]};
            Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
            map.entities.push(pin);
            recentTarget = target;
            recentTargetCopy = pin;
        })
        .catch(err => {
            throw err;
        });
    }
    else {
        document.getElementById("warning").innerHTML = "Please enter in a valid starting location.";
    }
}
