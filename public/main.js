const rootRef = firebase.database().ref();
const pageCountsRef = rootRef.child("pageCounts");

var postData = {
    page: location.pathname,
    count: 1, 
    lastvisit: firebase.database.ServerValue.TIMESTAMP,
    lastreferrer: document.referrer
}; 

pageCountsRef.push(postData);

// Create an object to store copy of the saved db data
let obj = {};

