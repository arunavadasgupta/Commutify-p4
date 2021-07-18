//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyChEF9YfIGonNewoq4zeRDWhi3FAZH_qXo",
      authDomain: "p-r-i-n-c-e-mylc.firebaseapp.com",
      databaseURL: "https://p-r-i-n-c-e-mylc-default-rtdb.firebaseio.com",
      projectId: "p-r-i-n-c-e-mylc",
      storageBucket: "p-r-i-n-c-e-mylc.appspot.com",
      messagingSenderId: "1031889133881",
      appId: "1:1031889133881:web:dccc8b844e6c44b7b288e8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout()
{   
localStorage.removeItem("user_name")
localStorage.removeItem("room_name");
window.location="index.html";
}