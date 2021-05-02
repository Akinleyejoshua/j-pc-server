function createAlert() {
    // to create alert elements for the html documents
    var htmlBody = document.querySelector('body');

    var div = document.createElement('div');
    div.id = "alert";

    var alertContent = document.createElement('div');
    alertContent.id = "content";

    // HEADER
    var alertHeader = document.createElement('div');
    alertHeader.id = "alert-header";

    var p = document.createElement('p');
    p.id = "header-msg";

    var headerCloseButton = document.createElement('button');
    headerCloseButton.id = "close";
    headerCloseButton.innerHTML = "&times;"

    alertHeader.appendChild(p);
    alertHeader.appendChild(headerCloseButton);

    //BODY
    var alertBody = document.createElement('div');
    alertBody.id = "alert-body";

    var p = document.createElement('p');
    p.id = "body-msg";

    alertBody.appendChild(p)

    //FOOTER
    var alertFooter = document.createElement('div');
    alertFooter.id = "alert-header";

    var p = document.createElement('p');
    p.id = "footer-msg";

    alertFooter.appendChild(p)


    htmlBody.appendChild(div);
    div.appendChild(alertContent);
    alertContent.appendChild(alertHeader)
    alertContent.appendChild(alertBody);
    alertContent.appendChild(alertFooter);

    //close the alert
    var alertDiv = document.querySelector("#alert")
    var close = document.querySelector("#close");

    close.addEventListener('click', (event) => {

        alertDiv.style.display = 'none';

    })

    alertDiv.style.display = 'none';


} createAlert()

// Alert function 
function Alert(header, body, footer) {
    var alertHeaderDiv = document.querySelector("#header-msg");
    alertHeaderDiv.innerHTML = header;

    var alertBodyDiv = document.querySelector("#body-msg");
    alertBodyDiv.innerHTML = body;

    var alertFooterDiv = document.querySelector("#footer-msg");
    alertFooterDiv.innerHTML = footer;

    var alertDiv = document.querySelector("#alert")
    alertDiv.style.display = 'block';

}

//Alert("Alert", "Welcome")