var firebaseConfig = {
  apiKey: "AIzaSyD9Sra6Hz5fhHdsf15OxWtVCfs2P786FR8",
  authDomain: "kwitter-5c567.firebaseapp.com",
  databaseURL: "https://kwitter-5c567-default-rtdb.firebaseio.com",
  projectId: "kwitter-5c567",
  storageBucket: "kwitter-5c567.appspot.com",
  messagingSenderId: "91627358081",
  appId: "1:91627358081:web:96d1107920a6e211a0ca80"
};


firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name1", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot){ 
   childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
