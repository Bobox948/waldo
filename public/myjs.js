
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDjPAyUmMGosOlTzEz0whdl8lvHlCk4Stw",
    authDomain: "waldo-f0134.firebaseapp.com",
    projectId: "waldo-f0134",
    storageBucket: "waldo-f0134.appspot.com",
    messagingSenderId: "630658148560",
    appId: "1:630658148560:web:be90b4692bbceb3db1d6d5"
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