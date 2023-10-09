function formvalidat() {
    var username= document.getElementById("Username").value;
    var email= document.getElementById("Email").value;
    var phone= document.getElementById("Phone").value;
    var error=document.getElementById("error");
    var text="";

    if(username.length < 4){
        text="please entre valid username"
        error.innerHTML= text;
        return false
    }
    else if(email.indexof("@")==-1){
        text="please entre valid Email"
        error.innerHTML= text;
        return false
    }
    else if( isNaN(phone)){
        text="please entre valid phone"
        error.innerHTML= text;
        return false
    }
    else{
        alert("Done")
        return false;
    }
    }

    function {
        const d=new Date()
        console.log(d);
    }


