// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3BBcQfMJvv_bgENsIGfBY1BmfoIJdjnk",
    authDomain: "testpush-9145e.firebaseapp.com",
    databaseURL: "https://testpush-9145e.firebaseio.com",
    projectId: "testpush-9145e",
    storageBucket: "testpush-9145e.appspot.com",
    messagingSenderId: "649600234524"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.requestPermission()
  .then(function(){

  	console.log("have permission");

  	return messaging.getToken();
  })
  .then(function(token){
  	console.log(token);
  })
  .catch(function(err){

console.log("error Occurred");
  })

  messaging.onMessage(function(payload){
console.log("onMessage",payload);
  });


 