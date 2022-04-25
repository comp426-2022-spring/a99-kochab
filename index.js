// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHlOhEiWo0_DlfqLk3E_A4Fk04lroTIog",
  authDomain: "fir-login-e4820.firebaseapp.com",
  projectId: "fir-login-e4820",
  storageBucket: "fir-login-e4820.appspot.com",
  messagingSenderId: "879879949372",
  appId: "1:879879949372:web:75c037a593afae51574739"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    // ...
  } else {
    // User is signed out
    // ...
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
  if (user != null) {
    console.log("User Logged In");
  }
  else {
    console.log("No user");
  }
});


window.login = function() {

  var userEmail = document.getElementById("email_login").value;
  var userPass = document.getElementById("password_login").value;

  signInWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      location.href = '/mainPage.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


};

window.signin = function() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  createUserWithEmailAndPassword(auth, userEmail, userPass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

};

window.logout = function() {
  auth.signOut();
};




