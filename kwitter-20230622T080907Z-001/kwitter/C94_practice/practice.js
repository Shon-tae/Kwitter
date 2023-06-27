

varfirebaseConfig = {
  apiKey: "AIzaSyDDYGgf8zYGxkK8WT6piXKNayWa7-cZ08s",
  authDomain: "kwitter-73163.firebaseapp.com",
  databaseURL: "https://kwitter-73163-default-rtdb.firebaseio.com",
  projectId: "kwitter-73163",
  storageBucket: "kwitter-73163.appspot.com",
  messagingSenderId: "680368171591",
  appId: "1:680368171591:web:6beb2fa79ab4e2d744df62"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
 
  
  firebase.database().ref("/").child().update({
    purpose : "adding user"
  });
}


