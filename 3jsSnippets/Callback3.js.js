function AnotherListner(event, callback) {

  var myEvent = {
    eventType: "keyPress",
    keyCode: "p"
  }

  if (myEvent.eventType == event) {
    callback(myEvent); //passing an object to a callback function
  }
}

var newListner = AnotherListner("keyPress", (event) => { //callback function
  console.log(event.keyCode);
});