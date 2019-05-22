const functions = require('firebase-functions');
const firebase = require('firebase');
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
const admin = require('firebase-admin');
//require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();


exports.makeUppercase = functions.database.ref('user/{createdID}')
    .onCreate((snapshot, context) => {
        //var storage = firebase.storage().ref();
        //const original = snapshot.child('image').val();
        //var gsReference = storage.refFromURL(original)
        hashcode="happy";
        var jimp = require('jimp')
        //var config = {
           // apiKey: "AIzaSyClj4QqZWteklOyKBcdeRZXJxPvsftbsYk",
          //  authDomain: "passbyop-ef863.firebaseapp.com",
          //  databaseURL: "https://passbyop-ef863.firebaseio.com/",
           // storageBucket: "gs://passbyop-ef863.appspot.com"
        //  };
        //admin.initializeApp(config);
        //var database = firebase.database();
        //database.ref('user').child('ram').set("jimp");
        jimp.read("http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg")
            .then(function(image){
                //var database = firebase.database();
                //database.ref('user').child('ram').set("jimp");
                hashcode="";
                var x0=0,y0=3,x1=156,y1=71,x2=17,y2=68,x3=56,y3=25;
                var h0= image.getPixelColor(x0,y0);
                var h1= image.getPixelColor(x1,y1);
                var h2= image.getPixelColor(x2,y2);
                var h3= image.getPixelColor(x3,y3);
                var hString = h0.toString()+h1.toString()+h2.toString()+h3.toString();
                while(hString!==""){
                    hashcode+=String.fromCharCode(hString.substring(0,2));
                    console.log(hashcode);
                    hString=hString.substring(2);
                }

                return hashcode;
        }).catch(function(err){
        console.log(err);
        });

        username = context.params.createdID;
        sleep(10000).then(() => {
            // This will execute 10 seconds from now
           // console.log("hashcede "+hashcode);
           return snapshot.ref.child('passHash').set(hashcode);
        }).catch(function(err){
         console.log(err);
        });
      
    });
