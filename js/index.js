"use strict";
$(document).ready(function(){
var index = 0;    
changeImg();                       
function changeImg() {
         var i;
         var s = document.getElementsByClassName("mySlides");
         for (i = 0; i < s.length; i++) {
         s[i].style.display = "none";  
         }
         index++;
         if (index > s.length) {index = 1}    
         s[index-1].style.display = "block";  
         setTimeout(changeImg, 3000); // Change image every 3 seconds
         }
$("#e-mail").text( sessionStorage.email );
$('#submit1').click(function(e) {
    $("span").text("");   // clear any previous error messages
      var isValid = true;
      var email = $("#e-mail").val();
      var getValue = new Array(); 
      getValue["e-mail"]= email;
      if ( email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/) ) 
        {
            isValid = false;
            $("#e-mail").next().text("Please enter a valid email."); 
            e.preventDefault();
        }
    
      sessionStorage.email = email;
      sessionStorage.news = "";
      for(var key in getValue){
      sessionStorage.news =sessionStorage.news+key+"="+getValue[key]+"|";
      }
      sessionStorage.news=sessionStorage.news.substr(0,sessionStorage.news.length - 1);
    
});
});
