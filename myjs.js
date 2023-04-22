import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX8PICPbVGlRytkpwFvr05Elq1roUfSpQ",
  authDomain: "waldo-7efa9.firebaseapp.com",
  projectId: "waldo-7efa9",
  storageBucket: "waldo-7efa9.appspot.com",
  messagingSenderId: "990795196497",
  appId: "1:990795196497:web:b3559029c2f10873aeb070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


document.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily


 let time = Date.now()

    myimage.onclick = function(e) {
        var ratioX = e.target.naturalWidth / e.target.offsetWidth;
        var ratioY = e.target.naturalHeight / e.target.offsetHeight;
      
        var domX = e.x + window.pageXOffset - e.target.offsetLeft;
        var domY = e.y + window.pageYOffset - e.target.offsetTop;
      
        var x = Math.floor(domX * ratioX);
        var y = Math.floor(domY * ratioY);


        if (x > 1194 && x < 1236 && y > 1199 && y < 1311)

        {
            let time2 = Date.now()

            let final = time2 - time

            let final2 = (final/1000).toFixed(0)

            alert(`gg, done in ${final2} seconds`)
        
        }
      
      };

let timer = document.querySelector('#time')

var i = 0;

setInterval(() => {
    i = i + 1;
    timer.innerHTML = `Time : ${i}`;
}, 1000);


      
      
     


})