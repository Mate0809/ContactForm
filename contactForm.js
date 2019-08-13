$(document).ready(function () {

    $("#name").focus(function () {
        $("#hrName").css("border", "2px solid #000000");
    });

    $("#email").focus(function () {
        $("#hrEmail").css("border", "2px solid #000000");
    });

    $("#subject").focus(function () {
        $("#hrSubject").css("border", "2px solid #000000");
    });

});


function validation() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;

    var box = document.getElementById("box");

    var regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (name == "") {
        document.getElementById("nameWarn").innerHTML = "Name is required";
        document.getElementById("hrName").style.border = "2px solid #ff0000";
        return false;
    } else if (name != "") {
        document.getElementById("nameWarn").innerHTML = "";
    }

    if (email == "") {
        document.getElementById("emailWarn").innerHTML = "Email is required";
        document.getElementById("hrEmail").style.border = "2px solid #ff0000";
        return false;
    } else if (!regEx.test(email)) {
        document.getElementById("emailWarn").innerHTML = "Invalid email";
        document.getElementById("hrEmail").style.border = "2px solid #ff0000";
        return false;
    } else if (email != "") {
        document.getElementById("emailWarn").innerHTML = "";
    }

    if (subject == "") {
        document.getElementById("subjectWarn").innerHTML = "Subject is required";
        document.getElementById("hrSubject").style.border = "2px solid #ff0000";
        return false;
    } else if (subject != "") {
        document.getElementById("subjectWarn").innerHTML = "";
    }

    if (message == "") {
        document.getElementById("messageWarn").innerHTML = "The message field cannot be empty";
        return false;
    } else if (message != "") {
        document.getElementById("messageWarn").innerHTML = "";
        box.style.display = "block";
        return true;
    }
}