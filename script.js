// Get references to the input fields and button

const usernameInput = document.getElementById('tb1');
const passwordInput = document.getElementById('tb2');
const goButton = document.querySelector('button');
// Add a click event listener to the button
Cookies.remove('Verifide');
let loginAttempts = 0;
Cookies.set('Verifide', 'close', { expires: 1 })
function sus() {
    window.open("https://dev-e4rt2y2k4tj3w6mp.us.auth0.com/login?client=9ESyzMOUTLoaQSv2xOtfll7XlKLOpZtK", '_blank');
    Cookies.set('Verifide', 'true', { expires: 1 });
};
  
    // Check if the username and password match the expected values
    //if (username === 'deez' && password === 'NUTZ!') {
      // If they match, open youtube.com in a new window

     // Cookies.set('Verifide', 'true', { expires: 1 })
    // window.open('Sub/index.html', '_blank');

  //  } else {
      
      // If they don't match, display an error message
    //  if(loginAttempts===3){
    //    Cookies.set('Verifide', 'close', { expires: 1 })
    //    var num=100;
    //    done=false;
     //   let x='https://pornhub.com/';
     //   Cookies.set('Verifide', 'close', { expires: 8 })
     //   for (var i=1; i<=num; i++){
      //     history.pushState(0, 0, i==num?x:i.toString());
          // (function(){while(1){location.reload()}}())
     //      window.open('https://pornhub.com/', '_blank');
         //  window.open('https://example.com/', "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');

        //   var windowFeatures = 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes';
        //   var newWindow = window.open('https://pornhub.com/', "_blank", windowFeatures);  
        //   var leftPos = Math.floor(Math.random() * (window.screen.width - 357)); // Generates a random left position
        //   var topPos = Math.floor(Math.random() * (window.screen.height - 330)); // Generates a random top position
        //   newWindow.moveTo(leftPos, topPos); // Moves the window to the random position
           
        //   num=num*100;
       //}
     // }
     // else{
     //   loginAttempts++;
      //  var password1 = document.getElementById("wrongPassword");
      //  password1.style.display = "block";
      //  console.log(repeat);
    //  }
   // }

//};



window.addEventListener("beforeunload", function(event) {
  Cookies.set('Verifide', 'close', { expires: 1 })
});



var myCookie = Cookies.get('Verifide');
//if(myCookie==='close'){
//  this.close();
//}
