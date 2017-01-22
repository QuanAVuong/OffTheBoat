var map, marker;

function initMap() {
    // create a new map instance of the Map object constructor
    // the created map object will be inserted in the div with id 'map'
  map = new google.maps.Map(document.getElementById('map'), {
    // MAP OPTIONS
    // REQUIRED: center, zoom
    // initial resolution at which to display the map is set by 
    zoom: 13,
    center: {lat: 59.325, lng: 18.070}
    
  });
  console.log("map: ", map);
  
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    icon: "http://preloaders.net/preloaders/489/Classic%20map%20marker.gif",
    animation: google.maps.Animation.BOUNCE,
    position: {lat: 59.327, lng: 18.067}
  });
  console.log("marker: ", marker);
  
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function setNewCenter(event) {
  event.preventDefault()
}

$('form').submit(setNewCenter)


function Company(name) {
  this.name = name;
  this.size = 0;
  this.employees = [];
}

function Employee(name) {
  this.name = name;
  this.company = null;
  this.salary = 0;
}

Company.prototype.hire = function (employee, salary) {
  this.employee.push(employee);
  this.size++;
  employee.company = this.name;
  employee.salary = salary;
}

var c4q = new Company("Coalition for Queens")
var charles = new Employee("Charles Kuang")
var nate = new Employee("Nate Maddrey")
c4q.hire(charles, 500000)
c4q.hire(nate, 1000000)
c4q.employees
c4q.size
charles.salary
nate.salary;
