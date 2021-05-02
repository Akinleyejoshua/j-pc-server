var body = document.querySelector("body");
var loadingCounter = 0;

function Load() {

    //creating loading elements 
    var loader = document.createElement("div");
    var loaderBody = document.createElement("div")

    // ID selector
    loader.id = "loader";
    loaderBody.id = "loader-body";

    body.appendChild(loaderBody)
    loaderBody.appendChild(loader);

    var timer;

    function count() {
        loadingCounter++
        if (loadingCounter == 100) {
            loaderBody.style.display = 'none';
            clearInterval(timer)
        }
    };

    timer = setInterval(count, 100)

};
