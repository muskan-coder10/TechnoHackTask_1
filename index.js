function validation(){
    
    if(document.Formfill.Firstname.value==""){
        document.getElementById("result").innerHTML="First name*";
        return false;
    }
    else if(document.Formfill.Firstname.value.length<2){
        document.getElementById("result").innerHTML="Atleast two letter*";
        return false;
    }
    else if(document.Formfill.Surname.value.length<2){
        document.getElementById("result").innerHTML="Atleast two letter*";
        return false;
    }
    else if(document.Formfill.Email.value===""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your confirm Password";
        return false;
    }
    else if(document.Formfill.cPassword.value!==document.Formfill.cPassword.value){
        document.getElementById("result").innerHTML="Password doesn't Matched";
        return false;
    }
    else if(document.Formfill.Password.value!==document.Formfill.cPassword.value){
       popup.classlist.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function CloseSlid(){
    popup.classlist.remove("open-slide")
}

