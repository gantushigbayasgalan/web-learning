// Initialize Firebase
var config = {
    apiKey: "AIzaSyDDanO0n2i2Ymm3aitGBEX_YZ2xpS7YStc",
    authDomain: "mission6-e271b.firebaseapp.com",
    databaseURL: "https://mission6-e271b.firebaseio.com",
    projectId: "mission6-e271b",
    storageBucket: "mission6-e271b.appspot.com",
    messagingSenderId: "690464434018"
};      
firebase.initializeApp(config);
var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
    window.user = user;
    console.log(user);
    if (user){
        console.log("Log Out");
    }else{
        console.log("Log In");
    }
    // Step 1:
    //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
    //  If there is a user, log out out user details for debugging purposes.
});

var countRef = database.ref('count/');

countRef.on('value', function(snapshot) {
    count = snapshot.val().value;
    document.getElementById("demo").innerHTML = count;
});


function clickFunction() {
    count++;
    document.getElementById("demo").innerHTML = count;
    database.ref('count/').set({
        value: count
    });
}

