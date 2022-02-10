var conductor = {
      id: 12345678,
      password: "pass"

}
 var passenger = {
     id: 09876543,
     password : "password"
 }

var login =  document.getElementById("loginform");
login.addEventListener('submit',(e)=>{
    e.preventDefault();

    loginFunc();
              

})

function loginFunc(){


    var userData = new FormData(loginform);

    var idNo = userData.get("idno");
    var password = userData.get("passfield")
    

    console.log(idNo);
    console.log(password);

    if(idNo == conductor.id && password == conductor.password){
        window.location.href =  "./scanned.html";
        
    }

    else if ( idNo == passenger.id && password == passenger.password){
         window.location.href =  "./destination.html"
  
     }
     else{
        alert('you have entered wrong fields')
    }

}