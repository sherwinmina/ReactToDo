import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCKlJQsAHq784dfOqiUyUOaeQPbf8wWGno",
    authDomain: "sherwin-todo-app.firebaseapp.com",
    databaseURL: "https://sherwin-todo-app.firebaseio.com",
    storageBucket: "sherwin-todo-app.appspot.com",
    messagingSenderId: "498088444397"
  };
  firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'TodoApp'
});
