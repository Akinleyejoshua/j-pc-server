
// Function for prompting event
function createPrompt() {
    // to create alert elements for the html documents
    var htmlBody = document.querySelector('body');

    var div = document.createElement('div');
    div.id = "prompt";

    var promptContent = document.createElement('div');
    promptContent.id = "prompt-content";

    // HEADER
    var promptHeader = document.createElement('div');
    promptHeader.id = "prompt-header";

    var p = document.createElement('p');
    p.id = "prompt-header-msg";

    var headerCloseButton = document.createElement('button');
    headerCloseButton.id = "close";
    headerCloseButton.innerHTML = "&times;"

    promptHeader.appendChild(p);
    promptHeader.appendChild(headerCloseButton);

    //BODY
    var promptBody = document.createElement('div');
    promptBody.id = "prompt-body";

    var p = document.createElement('p');
    p.id = "prompt-body-msg";

    promptBody.appendChild(p)

    //FOOTER
    var promptFooter = document.createElement('div');
    promptFooter.id = "prompt-footer";

    var input = document.createElement('input');
    input.id = "prompt-input"

    promptFooter.appendChild(input)


    htmlBody.appendChild(div);
    div.appendChild(promptContent);
    promptContent.appendChild(promptHeader)
    promptContent.appendChild(promptBody);
    promptContent.appendChild(promptFooter);

    var PromptDiv = document.querySelector("#prompt")
    PromptDiv.style.display = 'none';

    var close = document.querySelector("#close");
    close.style.display = "none";


}; createPrompt()

//Create Prompt function
var inputValue;
var user;


var Prompt = function (header, body) {



    var promptHeaderDiv = document.querySelector("#prompt-header-msg");
    promptHeaderDiv.innerHTML = header;

    var promptbodyDiv = document.querySelector("#prompt-body-msg");
    promptbodyDiv.innerHTML = body;

    var PromptDiv = document.querySelector("#prompt")
    PromptDiv.style.display = 'block';

    //Creating event
    var promptInput = document.querySelector("#prompt-input");
    promptInput.focus()

    promptInput.addEventListener('keyup', (event) => {

        if (event.keyCode === 13) {

            PromptDiv.style.display = 'none';
            user = promptInput.value;
            return inputValue;

        }

    })

    returnValue = function () {
        var promptValue = inputValue;
        return promptValue;
    }

    return returnValue;

}

user = Prompt("Username", "Hello, what is your name?")()
