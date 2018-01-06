import firebase from 'firebase'
var config = {
	apiKey: "AIzaSyDFU0JyFmsjFfbEMPK9nW2BnXUZ7H6mgOE",
	authDomain: "figfree-191311.firebaseapp.com",
	databaseURL: "https://figfree-191311.firebaseio.com",
	projectId: "figfree-191311",
	storageBucket: "figfree-191311.appspot.com",
	messagingSenderId: "281768293718"
};

var fire = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default fire;