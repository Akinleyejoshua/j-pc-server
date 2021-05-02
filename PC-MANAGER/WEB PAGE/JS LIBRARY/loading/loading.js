// function for defining a loading event
var body = document.querySelector("body");

function createLoad(node) {

    //creating loading elements 
    var loader = document.createElement("div");
    loader.id = "loader";
    node.appendChild(loader)

    loader.style.display = 'none';

}; createLoad(body)


// alert Body
alertBody = document.querySelector("#alert-body");
var alertMsg = document.querySelector("#body-msg");

function Load(node) {


    var loader = document.querySelector("#loader");
    loader.style.display = "block";


    node.appendChild(loader);

    alertBody.removeChild(alertMsg)

    return;

}

alertBody.style.display = "flex";
alertBody.style.justifyContent = "space-around";


//Alert("", "<style='display:none'>")
//Load(alertBody)