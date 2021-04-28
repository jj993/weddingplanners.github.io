"use strict";
$(document).ready(function() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
$("#date").val(today);
    
$("#booking_form").submit(
function(event){
            var isValid = true;
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var name = $("#name").val().trim();
            var email = $("#email").val().trim();
            var phone = $("#phone").val().trim();
//validate name
            if(name==""){
                $("#name").next().text("This field is required.");
                isValid = false;
            }
            else{
                $("#name").next().text("");
            }
    //validate email
            if(email==""){
                $("#email").next().text("This field is required.");
                isValid = false;
            }
            else if ( !emailPattern.test(email) ) {
                $("#email").next().text("Must be a valid email address.");
                isValid = false;
            }
            else {
                $("#email").next().text("");
            }
//validate phone
            if( phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
            isValid = false;
            $( "#phone" ).next().text("Please enter a phone number in required format.");
        }  
    else {
                $("#phone").next().text("");
            }
//call 
            $("#name").val(name);
            $("#email").val(email);
            $("#phone").val(phone);
// prevent the submission of the form if any entries are invalid
            if (isValid == false) {
                event.preventDefault();
            }
        }
    )
    
    });