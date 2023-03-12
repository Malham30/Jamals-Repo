//Jamal Hamilton
function CheckLogin(){
//These next 4 lines create variables that help theuser to login
    var FirstName = document.getElementById("First").value;
    var LastName = document.getElementById("Last").value;
    var AgentNum = document.getElementById("Agent").value;
    var FirstLast = FirstName + " " + LastName;
//these create a statement that lets the user know if the information used is corecct! 
    if (FirstLast.length > 40 || FirstLast.length < 2){
        document.getElementById("Login").innerHTML = "First Name is to long or incorrect, please RENTER!";
    }
    else if (AgentNum < 100 || AgentNum > 999){
        document.getElementById("Login").innerHTML = "Your Agent Badge Number is Incorrect, please RENTER!";
    }
//this creates an alert saying that the user has logged in sucessfully   
    else {
        alert("ACCESS GRANTED, WELCOME " + FirstLast + "! AGENT " + AgentNum + "!!");
    }
}    