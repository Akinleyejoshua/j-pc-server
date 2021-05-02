
var beginButton = document.querySelector("#begin");

beginButton.addEventListener('click', (event) => {

    Load()
    // remove body content

    removeBodyElement = () => {

        var getStarted = document.querySelector('#get-started')
        getStarted.style.display = "none"
 
    }; setTimeout(removeBodyElement, 5000)
    
    // generate form elements
    var body = document.querySelector('#body-content')

    createFormElements = () => {

        // create form element
        var form = document.createElement('form');
        form.id = "form";
        form.innerHTML = "Input your PC credentials<br>"
        body.appendChild(form);

        // field set
        var fieldset = document.createElement('fieldset');
        form.id = "fieldset";
        form.appendChild(fieldset);


        // User name
        var usernameLabel = document.createElement('label');
        usernameLabel.innerHTML = "Username: ";
        fieldset.appendChild(usernameLabel);
        var username = document.createElement("input");
        username.type = "username";
        username.id = "username";
        usernameLabel.appendChild(username);

        // PC name
        var pcNameLabel = document.createElement('label');
        pcNameLabel.innerHTML = "PC name: ";
        fieldset.appendChild(pcNameLabel);
        var pcName = document.createElement("input");
        pcName.type = "text";
        pcName.id = "pc-name";
        pcNameLabel.appendChild(pcName);

        // password
        var passwordLabel = document.createElement('label');
        passwordLabel.innerHTML = "Password: ";
        fieldset.appendChild(passwordLabel);
        var password = document.createElement('input');
        password.type = "password";
        password.id = "passowrd";
        passwordLabel.appendChild(password)

        //buttons
        var buttonElements = document.createElement('div');
        buttonElements.id = "button-div";
        buttonElements.innerHTML = "<button id='sign-up'>Sign UP</button>";
        buttonElements.innerHTML += "<button id='sign-in'>Sign IN</button>";
        fieldset.appendChild(buttonElements)

    }; setTimeout(createFormElements, 3000);

})

