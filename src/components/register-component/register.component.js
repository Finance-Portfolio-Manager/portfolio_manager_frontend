document.getElementById("registration-form").addEventListener("submit", function(register){
    register.preventDefault(); 
    
    var usernameError = document.getElementById("username-error");
    usernameError.hidden = true;

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var secondPassword = document.getElementById("repeat-password").value;

    var isValidInput = validateInput(firstName, lastName, email, username, password, secondPassword);

    if(isValidInput) {
        var credentials = {
            firstName:document.getElementById("first-name").value,
            lastName:document.getElementById("last-name").value,
            email:document.getElementById("email").value,
            username:document.getElementById("username").value,
            password:document.getElementById("password").value
            };
            fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/register", {
                method: 'post',
                headers: new Headers({
                    'Content-Type':'application/json'
                }),
                body: JSON.stringify(credentials)
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    if(data.status<200 || data.status>299){
                        usernameError.hidden = false;
                    } else if(data.status>=200 || data.status<=299){
                        window.location.href = "http://portfolio-manager-revature.s3-website.us-east-2.amazonaws.com/#/login";
                    }
                    
                })
                .catch(error => console.error(error));
    } 
});

function validateInput(firstName, lastName, email, username, password, secondPassword){
    var nameError = document.getElementById("name-error");
    nameError.hidden = true;
    var emailError = document.getElementById("email-error");
    emailError.hidden = true;
    var passwordError = document.getElementById("password-error");
    passwordError.hidden = true;
    var retypePasswordError = document.getElementById("retype-password-error");
    retypePasswordError.hidden = true;

    var letters = /^[A-Za-z]+$/;
    if(!firstName.match(letters) || !lastName.match(letters)){
        nameError.hidden = false;
        return false;
    }
    
    // just looks for string of the form string@string.string proper validation should be done with a validation link sent to the email address
    var emailCheck = /\S+@\S+\.\S+/; 
    if(!emailCheck.test(email)){
        emailError.hidden = false;
        return false;
    }
    
    var passCheck = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
    if(!passCheck.test(password) || password.length<8){
        passwordError.hidden = false;
        return false;
    }

    if(password!=secondPassword){
        retypePasswordError.hidden = false;
        return false;
    }
    return true;
}
