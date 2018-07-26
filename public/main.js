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

    const login = document.getElementById('login');
    const logout = document.getElementById('logout');
    const btnClick = document.getElementById('btnClick');

    document.getElementById('btnLogin').addEventListener('click', e => {
        console.log(firebase);
        auth.signInAnonymously();
    });

    document.getElementById('btnLogout').addEventListener('click', e => {
        auth.signOut();
    });

    auth.onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
        if (firebaseUser) {
            login.classList.add('hidden');
            logout.classList.remove('hidden');
            btnClick.classList.remove('hidden');
        } else {
            login.classList.remove('hidden');
            logout.classList.add('hidden');
            btnClick.classList.add('hidden');
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