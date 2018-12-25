var config = {
    apiKey: "AIzaSyAcB5GA3GuUxl3btxnwvDn7O8_SOfbTtSQ",
    authDomain: "cjms.firebaseapp.com",
    databaseURL: "https://cjms.firebaseio.com",
    projectId: "youtube-cjms",
    storageBucket: "youtube-cjms.appspot.com",
    messagingSenderId: "821776210389"
  };
  firebase.initializeApp(config);

let auth = firebase.auth();
auth.onAuthStateChanged(user => {
    if (user) {
        signedIn();
    }
    else {
        signedOut();
    }
});

function signedIn() {
  document.getElementById('main-div').classList = 'hidden';
  document.getElementById('decoy-div').classList = 'visible';
  document.getElementById("login-div").classList = 'hidden';
}

function signedOut() {
  alert("Sign in with Google");
  lock();
}
  