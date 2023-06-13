// Create a map object.
let myMap = L.map("map", {
    center: [45.324242, -79.210716],
    zoom: 7
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // An array containing each city's name, location, and population
  let cities = [{
    location: [43.843020, -79.022610],
    name: "Durham Radiology Associates",
    Address: '95 Bayly Street West, Suite 101, Ajax'
  },
  {
    location: [44.155392,-78.875031],
    name: "Stevenson Memorial Hospital",
    Address: "200 Fletcher Crescent, Alliston"
  },
  {
    location: [45.4411741,-76.353038],
    name: "Arnprior & District Memorial Hospital",
    Address: " 350 John Street North, Arnprior"
  },

  {
    location: [44.4149034, -79.6630413],
    name: "Royal Victoria Regional Health Centre",
    Address: "201 Georgian Drive, Barrie "
  },

  ];
  
  // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    L.marker(city.location)
      .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Address: ${city.Address.toLocaleString()}</h3>`)
      .addTo(myMap);
  }
  