var newMember;
do{
    newMember= prompt("Welcome! what is your name?");
}while(newMember != newMember || newMember ==""){
    alert("Wow! " + newMember + " " + "we are glad to have you on Soft meals Chocolate and Coffee Shop. Feel free to explore on our web page for better experience on your future tour campaign. Thank You!");
}

// function myWelcomeMessage(){
    
    
// }

console.log(myWelcomeMessage());

function changePics(object, url){
    object.src= url;
}

function changeUi(myColor){
    document.getElementById(myColor).style.backgroundColor = "pink";
    document.getElementById(myColor).style.color = "white";
}