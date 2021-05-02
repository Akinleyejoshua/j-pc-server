var getStartedButton = document.querySelector("#get-started");

getStartedButton.addEventListener('click', (event) => {

    Load();

    function openGetStartedPage() {
        window.location.href = ('GET STARTED/index.html')
    }

    setTimeout(openGetStartedPage, 2000)

})

