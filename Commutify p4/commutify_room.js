
// Your web app's Firebase configuration
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

    function logout()
    {
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
    }

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";
function addRoom()
{
      room_name=document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
            Prince:"coder"
      });
      localStorage.setItem("room_name", room_name);
      window.location="commutify_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name=" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="commutify_page.html";
}