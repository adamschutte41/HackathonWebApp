import users from '../../SignUp/signUp/js/main';
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function getUsername(){
        var validUser = false;
        var password = document.forms[0].password.value;
        for(var i = 0; v < users.length; i++){
            if(users[i].value = password){
                return "Your username is: " + users[i];
            }
        }

        if(!validUser){
            return "There entered password can't be found. Please create an account.";
        }
    }

    function getPassword(){
        var validUser = false;
        var username = document.forms[0].username.value;
        for(var i = 0; v < users.length; i++){
            if(users[i] = username){
               var returnVal = "Your password is: " + users[i].value;
               return returnVal;
            }
        }

        if(!validUser){
            var returnVal = "The entered username can't be found. Please create an account.";
            return returnVal;
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    
})(jQuery);