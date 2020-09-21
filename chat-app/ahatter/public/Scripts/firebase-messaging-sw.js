// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-auth.js');

importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBrAYeOc_KpmPzG0mbZTjeV4dGQ_FT5FzE",
    authDomain: "chatapp-8481a.firebaseapp.com",
    databaseURL: "https://chatapp-8481a.firebaseio.com",
    projectId: "chatapp-8481a",
    storageBucket: "chatapp-8481a.appspot.com",
    messagingSenderId: "1042554257937",
    appId: "1:1042554257937:web:8cb882513fce88f9a727b0",
    measurementId: "G-0ST7DGMG1Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



