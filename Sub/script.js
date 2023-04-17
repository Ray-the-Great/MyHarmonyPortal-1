var myCookie = Cookies.get('Verifide');

if(myCookie==='true'){
    function sus() {
  Cookies.set('Verifide', 'true', { expires: 1 })  
      };

window.addEventListener("beforeunload", function(event) {
  Cookies.set('Verifide', 'close', { expires: 0.2})
  this.close();
});
}
else{
 this.close(); 
}
