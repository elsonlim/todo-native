import firebase from 'firebase';
// import axios from 'axios';
import Config from '../config';

class DbService {
    init() {
        firebase.initializeApp(Config.firebase);
    }

    signInWithEmailAndPassword(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    createUserWithEmailAndPassword(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    onAuthStateChanged(callback) {
        firebase.auth().onAuthStateChanged(callback);
    }

    signOut() {
        firebase.auth().signOut();
    }

    // expected payload  // { data: [ { id: <someId>, item: <string> }, ... ] }
    getTodos() {
        // EXPRESS server
        // return axios.get(Config.localExpressMux.todoApi);

        // FIREBASE
        return new Promise((resolve) => {
            const userId = firebase.auth().currentUser.uid;
            const ref = firebase.database().ref(`users/${userId}/todos/default`);
            ref.on('value', (snapshot) => {
                const results = this.convertObjectToArray(snapshot.val());
                resolve({ data: results });
            });
        });
    }

    addTodo(body) {
        // EXPRESS server
        //return axios.post(Config.localExpressMux.todoApi, body);

        // FIREBASE
        const userId = firebase.auth().currentUser.uid;
        const ref = firebase.database().ref(`users/${userId}/todos/default`);
        return ref.push(body);   
    }

    deleteTodo(id) {
        // EXPRESS
        // return axios.delete(Config.localExpressMux.todoApi, {
        //     data: { id }
        // });

        // FIREBASE
        return new Promise((resolve) => {
            const userId = firebase.auth().currentUser.uid;
            const ref = firebase.database().ref(`users/${userId}/todos/default`);
            resolve(ref.child(id).remove());
        });   
    }

    convertObjectToArray(someObj) {
        if (!someObj || typeof someObj !== 'object') {
            return [];
        }

        const result = Object.keys(someObj)
            .map(key => Object.assign({ id: key }, someObj[key]));
        
        return result;
    }
}

const dbService = Object.freeze(new DbService());

export default dbService;
