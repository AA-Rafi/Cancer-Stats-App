// Create a map object.

var myMap = L.map("map", {
    center: [45.324242, -79.210716],
    zoom: 7
  });
  console.log(myMap)
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
 
  {
    location: [45.4821784,-77.6945652],
    name: "St. Francis Memorial Hospital",
    Address: "7 St Francis Memorial Drive, Madawaska Valley"
  },

  {
    location: [44.1629621,-77.3646788],
    name: "Belleville General Hospital",
    Address: "265 Dundas Street East, Belleville"
  },

  {
    location: [43.9092287,-78.6780961],
    name: "Lakeridge Health Bowmanville",
    Address: "47 Liberty Street South, Clarington"
  },

  {
    location: [45.0477817,-79.3146875],
    name: "South Muskoka Memorial Hospital",
    Address: "75 Ann Street, Bracebridge, ON"
  },

  {
    location: [43.6908813,-79.7512417],
    name: "Peel Memorial Centre for Integrated Health and Wellness",
    Address: "20 Lynch Street, Brampton"
  },

  {
    location: [43.7469379,-79.7438344],
    name: "Brampton Civic Hospital",
    Address: "2100 Bovaird Drive East, Brampton"
  },

  {
    location: [43.1518532,-80.2762299],
    name: "Brantford General Hospital",
    Address: "200 Terrace Hill Street, Brantford"
  },

  {
    location: [44.5978722,-75.6813173],
    name: "Brockville General Hospital",
    Address: "75 Charles Street, Brockville"
  },

  {
    location: [43.3171722,-79.8027491],
    name: "Joseph Brant Hospital",
    Address: " 1230 North Shore Boulevard, Burlington"
  },

  {
    location: [43.3783587,-80.328808],
    name: "Cambridge Memorial Hospital",
    Address: "700 Coronation Boulevard, Cambridge"
  },

  {
    location: [44.3128423,-77.7899179],
    name: "Campbellford Memorial Hospital",
    Address: "146 Oliver Road, Trent Hills"
  },

  {
    location: [42.404877,-82.1940509],
    name: "Chatham-Kent Health Alliance",
    Address: "Chatham Site, 80 Grand Avenue West, Chatham"
  },

  {
    location: [44.4998925,-80.2028544],
    name: "Collingwood General and Marine Hospital",
    Address: "459 Hume Street, Collingwood"
  },

  {
    location: [45.0304416,-74.7179696],
    name: "Cornwall Community Hospital",
    Address: "840 McConnell Avenue, Cornwall"
  },

  {
    location: [42.905644,-79.625211],
    name: "Haldimand War Memorial Hospital",
    Address: " 206 John Street, Dunnville"
  },

  {
    location: [48.6068106,-93.3908591],
    name: "Riverside Health Care",
    Address: " 110 Victoria Avenue, Fort Frances"
  },

  {
    location: [43.1891801,-79.5414285],
    name: "West Lincoln Memorial Hospital",
    Address: "169 Main Street East, Grimsby"
  },

  {
    location: [43.5560866,-80.2526123],
    name: "Guelph General Hospital",
    Address: " 115 Delhi Street, Guelph"
  },

  {
    location: [43.221392,-79.7740034],
    name: "St. Joseph's Healthcare Hamilton",
    Address: "King Campus, 2757 King Street East, Hamilton"
  },

  {
    location: [45.5995718,-74.6073883],
    name: "Hawkesbury & District General Hospital",
    Address: "1111 Ghislain Street, Hawkesbury"
  },

  {
    location: [49.6854828,-83.6791823],
    name: "Notre Dame Hospital",
    Address: "1405 Edward Street, Hearst"
  },

  {
    location: [45.3392164,-79.2057448],
    name: "Huntsville District Memorial Hospital",
    Address: "100 Frank Miller Drive, Huntsville"
  },

  {
    location: [49.4249423,-82.4279754],
    name: "Sensenbrenner Hospital",
    Address: "101 Progress Crescent, Kapuskasing"
  },

  {
    location: [49.7677173,-94.4992999],
    name: "Lake-Of-The-Woods District Hospital",
    Address: "21 Sylvan Street, Kenora"
  },

  {
    location: [44.2307055,-76.4861641],
    name: "Hotel Dieu Hospital",
    Address: "166 Brock Street, Kingston"
  },

  {
    location: [43.4254897,-80.4116269],
    name: "Grand River Hospital Freeport Campus",
    Address: "3570 King Street East, Kitchener"
  },

  {
    location: [42.0489704,-82.6145784],
    name: "Erie Shores HealthCare",
    Address: "194 Talbot Street West, Leamington"
  },

  {
    location: [44.3531955,-78.7508003],
    name: "Ross Memorial Hospital",
    Address: "10 Angeline Street North, Kawartha Lakes"
  },

  {
    location: [43.0005946,-81.2545574],
    name: "St. Joseph's Hospital",
    Address: "268 Grosvenor Street, London"
  },

  {
    location: [43.4971704,-79.8684908],
    name: "Milton District Hospital",
    Address: "725 Bronte Street South, Milton"
  },

  {
    location: [43.5719262,-79.6080843],
    name: "Mississauga Hospital",
    Address: " 100 Queensway West, Mississauga"
  },

  {
    location: [44.2398209,-76.9670342],
    name: "Lennox and Addington County General Hospital",
    Address: " 8 Richmond Park Drive, Greater Napanee"
  },

  {
    location: [47.4956233,-79.6933292],
    name: "Temiskaming Hospital",
    Address: "421 Shepherdson Road, Temiskaming Shores"
  },

  {
    location: [43.0941716,-79.0891927],
    name: "Greater Niagara General Hospital",
    Address: "5546 Portage Road, Niagara Falls"
  },

  {
    location: [46.3349752,-79.4995846],
    name: "North Bay Regional Health Centre",
    Address: "50 College Drive, North Bay"
  },

  {
    location: [43.7796307,-79.3661712],
    name: "Gentle Procedures Toronto",
    Address: "4800 Leslie Street, Toronto"
  },

  {
    location: [43.5168215,-79.6749404],
    name: "Winston Park Medical Centre",
    Address: "2315 Bristol Circle, Oakville"
  },

  {
    location: [43.9199124,-80.074039],
    name: "Headwaters Health Care Centre",
    Address: "Dufferin, 100 Rolling Hills Drive, Orangeville"
  },

  {
    location: [44.6049316,-79.4257923],
    name: "Orillia Soldiers' Memorial Hospital",
    Address: " 170 Colborne Street West, Orillia"
  },

  {
    location: [45.3351437,-75.8078952],
    name: "Queensway Carleton Hospital",
    Address: "3045 Baseline Road, Ottawa"
  },

  {
    location: [44.5698542,-80.9119107],
    name: "Owen Sound Hospital",
    Address: "1800 8th Street East, Owen Sound"
  },

  {
    location: [45.3405539,-80.0168326],
    name: "West Parry Sound Health Centre",
    Address: "6 Albert Street, Parry Sound"
  },

  {
    location: [45.8147316,-77.1070475],
    name: "Pembroke Regional Hospital",
    Address: " 705 MacKay Street, Pembroke"
  },

  {
    location: [44.2996386,-78.3481261],
    name: "Peterborough Regional Health Centre",
    Address: "1 Hospital Drive, Peterborough"
  },

  {
    location: [43.8710725,-79.4508633],
    name: "MacKenzie Health",
    Address: "Richmond Hill, 10 Trench Street, Richmond Hill"
  },

  {
    location: [42.976752,-82.3903352],
    name: "Bluewater Health",
    Address: "89 Norman Street, Sarnia"
  },

  {
    location: [42.8353002,-80.3138977],
    name: "Norfolk General Hospital",
    Address: "365 West Street, Simcoe"
  },

  {
    location: [43.1532973,-79.278914],
    name: "St. Catharines General Hospital",
    Address: "1200 Fourth Avenue, St. Catharines"
  },

  {
    location: [42.7631685,-81.1803651],
    name: "St Thomas-Elgin General Hospital",
    Address: "189 Elm Street, St. Thomas"
  },

  {
    location: [43.3680595,-80.9968089],
    name: "Stratford General Hospital",
    Address: "46 General Hospital Drive, Stratford"
  },

  {
    location: [46.3722886,-79.9176141],
    name: "West Nipissing General Hospital",
    Address: "725 Coursol Road, West Nipissing"
  },

  {
    location: [42.8633449,-80.7356007],
    name: "Tillsonburg District Memorial Hospital",
    Address: "167 Rolph Street, Tillsonburg"
  },

  {
    location: [48.4874971,-81.3143031],
    name: "Timmins and District Hospital",
    Address: "700 Ross Avenue East, Timmins"
  },

  {
    location: [43.7692285,-79.3625577],
    name: "North York General Hospital",
    Address: "4001 Leslie Street, Toronto"
  },

  {
    location: [44.1023697,-79.1278619],
    name: "Uxbridge Cottage Hospital",
    Address: "4 Campbell Drive, Uxbridge"
  },

  {
    location: [45.0882574,-75.3542849],
    name: "Winchester District Memorial Hospital",
    Address: " 566 Louise Street, North Dundas"
  },

  {
    location: [42.3003428,-82.9971686],
    name: "Windsor Metropolitan Hospital",
    Address: "1995 Lens Avenue, Windsor"
  },

  {
    location: [43.106955,-80.7531958],
    name: "Woodstock General Hospital",
    Address: "310 Juliana Drive, Woodstock"
  },

  ];
  
  // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (let i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker(city.location)
      .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Address: ${city.Address.toLocaleString()}</h3>`)
      .addTo(myMap);
  }
  