// Add console.log to check to see if our code is working.
console.log("working");

// Access token is URL-limited and only works on this site
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: "pk.eyJ1IjoidGluYWJlIiwiYSI6ImNsMTludWpydzF5YWMzanAzbWN4MjhvbGsifQ.mXYC2g0hH0Bv16We-_ic9A",
  }
);

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: "pk.eyJ1IjoidGluYWJlIiwiYSI6ImNsMTludWpydzF5YWMzanAzbWN4MjhvbGsifQ.mXYC2g0hH0Bv16We-_ic9A",
  }
);

// We create the tile layer that will be the background of our map.
let dark = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: "pk.eyJ1IjoidGluYWJlIiwiYSI6ImNsMTludWpydzF5YWMzanAzbWN4MjhvbGsifQ.mXYC2g0hH0Bv16We-_ic9A",
  }
);

// We create the tile layer that will be the background of our map.
let light = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: "pk.eyJ1IjoidGluYWJlIiwiYSI6ImNsMTludWpydzF5YWMzanAzbWN4MjhvbGsifQ.mXYC2g0hH0Bv16We-_ic9A",
  }
);

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [20.8, 25.5],
  zoom: 3,
  layers: [streets],
});

// Create a base layer that holds all three maps.
let baseMaps = {
  Streets: streets,
  Satellite: satelliteStreets,
  Dark: dark,
  Light: light,
};

// Add 2nd layer group for the suicide data
let allSuicides = new L.LayerGroup();
let boomers = new L.LayerGroup();
let giGen = new L.LayerGroup();
let genX = new L.LayerGroup();
let genZ = new L.LayerGroup();
let millenials = new L.LayerGroup();
let silent = new L.LayerGroup();

// Add a reference to suicides to the overlays object
let overlays = {
  "Suicides per 100k all generations": allSuicides,
  "G.I. Generation (b. 1901 - 1927)": giGen,
  "Silent Generation (b. 1928 - 1945)": silent,
  "Boomers (b. 1946 - 1964)": boomers,
  "Gen X (b. 1965 - 1980)": genX,
  "Millennials (b. 1981 - 1996)": millenials,
  "Gen Z (b. 1997 - 2012)": genZ
};


// Add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps).addTo(map);
L.control.layers(overlays).addTo(map);

// Retrieve suicide GeoJSON data
d3.json("https://tinabeee.github.io/Data/capitals2.geojson").then(function(data) {
  // This function returns the style data for each of the country's suicide
  // data plotted on the map
  function styleInfo(feature) {
    console.log(feature);
    return {
      opacity: 1,
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.suicides),
      color: "#000000",
      radius: feature.properties.suicides,
      stroke: true,
      weight: 0.5,
    };
  }

  function styleInfoGI(feature) {
      return {
          opacity: 1,
          fillOpacity: 0.7,
          fillColor: getColor(feature.properties.gi_gen),
          color: "#000000",
          radius: feature.properties.gi_gen,
          stroke: true,
          weight: 0.5,
      };
  }

    function styleInfoSilent(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.silent),
            color: "#000000",
            radius: feature.properties.silent,
            stroke: true,
            weight: 0.5,
        };
    }

    function styleInfoBoomers(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.boomers),
            color: "#000000",
            radius: feature.properties.boomers,
            stroke: true,
            weight: 0.5,
        };
    }

    function styleInfoGenX(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.gen_x),
            color: "#000000",
            radius: feature.properties.gen_x,
            stroke: true,
            weight: 0.5,
        };
    }

    function styleInfoMillennials(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.millenials),
            color: "#000000",
            radius: feature.properties.millenials,
            stroke: true,
            weight: 0.5,
        };
    }

    function styleInfoGenZ(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.gen_z),
            color: "#000000",
            radius: feature.properties.gen_z,
            stroke: true,
            weight: 0.5,
        };
    }


  // This function determines the color of the marker based on the number
  // of per-capita suicides
  function getColor(suicides) {
    if (suicides > 50) {
      return "#581E00";
    }
    if (suicides > 46) {
      return "#730A03";
    }
    if (suicides > 42) {
      return "#8D0623";
    }
    if (suicides > 38) {
      return "#A50B57";
    }
    if (suicides > 34) {
      return "#B41AB2";
    }
    if (suicides > 30) {
      return "#7A2EC2";
    }
    if (suicides > 26) {
      return "#4545CF";
    }
    if (suicides > 22) {
        return "#5C8EDA";
    }
    if (suicides > 18) {
        return "#73DCE3";
    }
    if (suicides > 14) {
        return "#8AEBB9";
    }
    if (suicides > 10) {
        return "#A1F2A1";
    }
    if (suicides > 6) {
        return "#CAF7B8";
    }
    return "#F6FBCF";
  }

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfo,
 // We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("<b>Suicides:</b> " + feature.properties.suicides + "<br><b>Location:</b> " + feature.properties.country);
}
}).addTo(allSuicides);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfoGI,
 // We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("<b>Suicides:</b> " + feature.properties.gi_gen + "<br><b>Location:</b> " + feature.properties.country);
}
}).addTo(giGen);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfoSilent,
 // We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("<b>Suicides:</b> " + feature.properties.silent + "<br><b>Location:</b> " + feature.properties.country);
}
}).addTo(silent);


 // Creating a GeoJSON layer with the retrieved data.
 L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfoBoomers,
 // We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("<b>Suicides:</b> " + feature.properties.boomers + "<br><b>Location:</b> " + feature.properties.country);
}
}).addTo(boomers);



  // Creating a GeoJSON layer with the retrieved data.
 L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfoGenX,
 // We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("<b>Suicides:</b> " + feature.properties.gen_x + "<br><b>Location:</b> " + feature.properties.country);
}
}).addTo(genX);


  // Creating a GeoJSON layer with the retrieved data.
 L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfoMillennials,
 // We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("<b>Suicides:</b> " + feature.properties.millenials + "<br><b>Location:</b> " + feature.properties.country);
}
}).addTo(millenials);


  // Creating a GeoJSON layer with the retrieved data.
 L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfoGenZ,
 // We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("<b>Suicides:</b> " + feature.properties.gen_z + "<br><b>Location:</b> " + feature.properties.country);
}
}).addTo(genZ);





  // Add suicides layer to the map
  allSuicides.addTo(map);
  giGen.addTo(map);
  silent.addTo(map);
  boomers.addTo(map);
  genX.addTo(map);
  millenials.addTo(map);
  genZ.addTo(map);

});


