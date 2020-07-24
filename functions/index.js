const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.checkAlias = functions.https.onCall(async (data, context) => {   // This will be called from the front-end
    const ref = admin.firestore().collection('users').doc(data.slug);

    try {
        const doc = await ref.get();
        // return doc.data()
        return { unique: !doc.exists };
    }
    catch (err) {
        throw new functions.http.HttpsError('Failed to connect');
    }
})

// let checkAlias = firebase.functions().httpsCallable('checkAlias')
