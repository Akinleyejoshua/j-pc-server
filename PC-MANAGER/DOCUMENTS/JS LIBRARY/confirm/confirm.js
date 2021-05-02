function createConfirm() {
    // to create alert elements for the html documents
    var htmlBody = document.querySelector('body');

    var div = document.createElement('div');
    div.id = "confirm";

    var confirmContent = document.createElement('div');
    confirmContent.id = "confirm-content";

    // HEADER
    var confirmHeader = document.createElement('div');
    confirmHeader.id = "confirm-header";

    var p = document.createElement('p');
    p.id = "header-msg";

    var headerCloseButton = document.createElement('button');
    headerCloseButton.id = "close";
    headerCloseButton.innerHTML = "&times;"

    confirmHeader.appendChild(p);
    confirmHeader.appendChild(headerCloseButton);

    //BODY
    var confirmBody = document.createElement('div');
    confirmBody.id = "confirm-body";

    var p = document.createElement('p');
    p.id = "body-msg";

    confirmBody.appendChild(p)

    //FOOTER
    var confirmFooter = document.createElement('div');
    confirmFooter.id = "confirm-footer";

    var yes = document.createElement('button');
    yes.id = "confirm-yes";

    var no = document.createElement('button');
    no.id = "confirm-no";

    confirmFooter.appendChild(yes);
    confirmFooter.appendChild(no);


    htmlBody.appendChild(div);
    div.appendChild(confirmContent);
    confirmContent.appendChild(confirmHeader)
    confirmContent.appendChild(confirmBody);
    confirmContent.appendChild(confirmFooter);

    //close the alert
    var confirmDiv = document.querySelector("#confirm")
    var close = document.querySelector("#close");

    close.addEventListener('click', (event) => {

        confirmDiv.style.display = 'none';

    })

    confirmDiv.style.display = "none";
    return;

}; createConfirm();


//Create Confirm function
var selectValue;
var exit;

var Confirm = function (header, body, choice1, choice2) {

    var confirmHeaderDiv = document.querySelector("#header-msg");
    confirmHeaderDiv.innerHTML = header;

    var confirmbodyDiv = document.querySelector("#body-msg");
    confirmbodyDiv.innerHTML = body;

    var confirmYesDiv = document.querySelector("#confirm-yes");
    confirmYesDiv.innerHTML = choice1;

    var confirmNoDiv = document.querySelector("#confirm-no");
    confirmNoDiv.innerHTML = choice2;

    var confirmDiv = document.querySelector("#confirm");
    confirmDiv.style.display = "block";

    // Defining events
    var confirmDiv = document.querySelector("#confirm")
    var content = document.querySelector("#confirm-content");
    var buttons = document.querySelector("#confirm-footer");


    content.addEventListener('click', (event) => {
        if (event.target.innerHTML === choice1) {

            selectValue = true
            return selectValue;

        }

        else if (event.target.innerHTML === choice2) {

            confirmDiv.style.display = 'none';
            selectValue = false
            return selectValue;

        }
    })

    returnValue = function () {
        var confirmValue = selectValue;
        return confirmValue;
    }

    return returnValue;

};

exit = Confirm("CONFIRM", "Exit", "Yes", "No")();
