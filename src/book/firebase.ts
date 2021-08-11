import * as admin from 'firebase-admin'
import * as path from 'path'

admin.initializeApp({
    credential: admin.credential.cert(path.join(__dirname, 'apikey.json')),
    databaseURL: "https://mynetology-default-rtdb.europe-west1.firebasedatabase.app"
});
          
//console.log(admin.SDK_VERSION,"app");

export const db = admin.firestore();