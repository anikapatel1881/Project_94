var firebaseConfig = {
    apiKey: "AIzaSyCD0kiSb-wszB8tT9-e54eByRuab3Qpx5U",
    authDomain: "kwitter-anika.firebaseapp.com",
    databaseURL: "https://kwitter-anika-default-rtdb.firebaseio.com",
    projectId: "kwitter-anika",
    storageBucket: "kwitter-anika.appspot.com",
    messagingSenderId: "846610719199",
    appId: "1:846610719199:web:f763f77560f146a244246a"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "add room"
      });
  }