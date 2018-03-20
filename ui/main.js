//submit username password to login 
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
     //create a request object
 var request = new XMLHttpRequest();
 //capture the response and store it in a variable
 request.onreadystatechange = function() {
     if(request.readyState ===  XMLHttpRequest.DONE){
         //take some action
         if(request.status === 200) {
            alert('logged in successfully');
    } else if(request.status === 403) {
        alert('username/password is incorrect');
    } else if(request.status === 500){
        alert('something went wrong on the server');
    }
     }
 };
   
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
     // var name = nameInput.value;
     //make the request
     request.open('POST', 'http://deveshprakashsingh.imad.hasura-app.io/login',true);
     request.sendRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({username:username, password:password}));
 };
    
