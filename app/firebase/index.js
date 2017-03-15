import firebase from 'firebase';


try {
  var config = {
      apiKey: "AIzaSyCKlJQsAHq784dfOqiUyUOaeQPbf8wWGno",
      authDomain: "sherwin-todo-app.firebaseapp.com",
      databaseURL: "https://sherwin-todo-app.firebaseio.com",
      storageBucket: "sherwin-todo-app.appspot.com",
      messagingSenderId: "498088444397"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

firebase.database().ref().set({
  appName: 'TodoApp',
  isRunning: true,
  user: {
    name: 'Sherwin',
    age: 28
  }
});
