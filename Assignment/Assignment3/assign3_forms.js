// 3. Create a simple form with a textbox, and buttons and try to apply validation rules.
// •	Please display appropriate validation messages on the screen. 
// •	HTML and JavaScript logic should be written in separate files.


var form = document.getElementById('form')

form.addEventListener('submit', function(){ 

    var username = document.getElementById('username')
    var password = document.getElementById('password')
    var phone = document.getElementById('phone')

    if(username.value == ""){
        error.push("Please enter the Username")
    }

    if(password.value == ""){
        error.push("Please enter the Password")
    }

    if(phone.value == ""){
        error.push("Please enter the Mobile Number")
    }

    alert("Form is Submitted Successfully!")

    var message = document.getElementById('message')
    message.innerText = error
    
})