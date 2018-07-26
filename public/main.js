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

    const auth = firebase.auth();

    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {
        console.log(firebase);
        auth.signInAnonymously();
    });

    btnLogout.addEventListener('click', e => {
        auth.signOut();
    });

    auth.onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
        if (firebaseUser) {
            btnLogout.classList.remove('hidden');
        } else {
            btnLogout.classList.add('hidden');
        }
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