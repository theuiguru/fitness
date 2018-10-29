var today = new Date(),
  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
switch(days[today.getDay()]) {
  case "Sunday":
    document.getElementById("sun").style.display = "block";
    break;
  case "Monday":
    document.getElementById("mon").style.display = "block";
    break;
  case "Tuesday":
    document.getElementById("tues").style.display = "block";
    break;
  case "Wednesday":
    document.getElementById("wed").style.display = "block";
    break;
  case "Thursday":
    document.getElementById("thurs").style.display = "block";
    break;
  case "Friday":
    document.getElementById("fri").style.display = "block";
    break;
  case "Saturday":
    document.getElementById("sat").style.display = "block";
    break;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(function(registration) {
      console.log(
        'Service Worker registration successful with scope: ',
        registration.scope
      );
    })
    .catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
}