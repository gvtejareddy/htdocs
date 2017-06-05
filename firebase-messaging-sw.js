importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');

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