function profileset(){
    document.getElementById("fnrequired").innerHTML = "";
    document.getElementById("lnrequired").innerHTML = "";
    document.getElementById("gnrequired").innerHTML = "";
    document.getElementById("earequired").innerHTML = "";
    document.getElementById("prequired").innerHTML = "";
    document.getElementById("rrequired").innerHTML = "";

    var x = document.getElementById("male").checked;
    var y = document.getElementById("female").checked;
    var z = document.getElementById("null").checked;

    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var gmail = document.getElementById("emailaddress").value
    var password = document.getElementById("password").value;
    var number = document.getElementById("contactnumber").value;
    var reason = document.getElementById("reason").value;

    if (fName == ""){
        document.getElementById("fnrequired").innerHTML = "Required";
        return;
    }
    if (lName == ""){
        document.getElementById("lnrequired").innerHTML = "Required";
        return;
    }

    if (x == true){
        localStorage.setItem("gender", "Male");
    }
    else if (y == true){
        localStorage.setItem("gender", "Female");
    }
    else if (z == true){
        localStorage.setItem("gender", "Prefer Not to Say");
    }
    else{
        document.getElementById("gnrequired").innerHTML = "Required";
        return;
    }

    if (gmail == ""){
        document.getElementById("earequired").innerHTML = "Required";
        return;
    }
    if (password == ""){
        document.getElementById("prequired").innerHTML = "Required";
        return;
    }
    if (reason == ""){
        document.getElementById("rrequired").innerHTML = "Required";
        return;
    }
    

    localStorage.setItem("firstName", fName);
    localStorage.setItem("lastName", lName);
    localStorage.setItem("emailaddress", gmail);
    localStorage.setItem("reason", reason);

    localStorage.setItem("profilestatus", "signed");
    window.location.href = "profile.html";
}

window.onload = function profileshow(){
    var status = localStorage.getItem("profilestatus");
    if (status == null){
        document.getElementById("profiletitle").innerHTML = "You have not made a profile yet.";
        document.getElementById("linktosign").innerHTML = "Click here to sign up.";
    }
    else{
        document.getElementById("profiletitle").innerHTML = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
        document.getElementById("cfirstName").innerHTML = "First Name: " + localStorage.getItem("firstName");
        document.getElementById("clastName").innerHTML = "Last Name: " + localStorage.getItem("lastName");
        document.getElementById("cgender").innerHTML = "Sex: " + localStorage.getItem("gender");
        document.getElementById("cemailaddress").innerHTML = "Email Address: " + localStorage.getItem("emailaddress");
        document.getElementById("creason").innerHTML = "Why I support this campaign: <br><br>" + localStorage.getItem("reason");
        
        document.getElementById("gratitude").innerHTML = "Thank you so much for supporting our campaign. An email will be sent to you shortly for you to be in contact with one of our members.";
    }
}