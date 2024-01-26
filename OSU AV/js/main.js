document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("chatInput").addEventListener("keydown", async function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevent default action (newline)
            await sendMessage(); // Await the sending of the message
        }
    });

    document.getElementById('clearChat').addEventListener('click', function () {
        var chatArea = document.getElementById("chatArea");
        chatArea.innerHTML = ''; // Clear the chat area
    });
});

async function sendMessage() {
    var chatInput = document.getElementById("chatInput");
    var userMessage = chatInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'sent');
        chatInput.value = ""; // Clear input after sending
        await chatbotResponse(userMessage); // Await the AI response
    }
}

function displayMessage(message, type) {
    var chatArea = document.getElementById("chatArea");
    var messageBubble = document.createElement("div");
    messageBubble.classList.add("message", type);

    // Check if the message follows a list pattern
    if (message.includes("\n") && message.match(/^\d\./m)) {
        var lines = message.split("\n");
        var list = document.createElement("ol");
        lines.forEach(line => {
            if (line.trim().length > 0) { // Avoid empty lines
                var item = document.createElement("li");
                item.textContent = line.replace(/^\d\.\s*/, ""); // Remove numbering
                list.appendChild(item);
            }
        });
        messageBubble.appendChild(list);
    } else {
        // If not a list, display as regular text
        messageBubble.textContent = message;
    }

    chatArea.appendChild(messageBubble);
    chatArea.scrollTop = chatArea.scrollHeight;
}




async function chatbotResponse(userMessage) {
    showLoadingIndicator(); // Show loading indicator

    try {
        const response = await query({ "in-0": userMessage, "user_id": "example_user_id" });
        removeLoadingIndicator(); // Ensure loading indicator is removed

        var reply = response["out-1"];
        // Determine content type based on the reply; this logic is just an example
        var contentType = "text";
        if (Array.isArray(reply)) {
            contentType = "list";
        } else if (reply.startsWith("function") || reply.startsWith("var")) {
            contentType = "code";
        }

        displayMessage(reply, "received", contentType);
    }
    catch (error) {
        console.error(error);
        removeLoadingIndicator(); // Ensure loading indicator is removed
        displayMessage("Sorry, there was an error processing your message.", "received");
    }
}



async function query(data) {
    const response = await fetch(
        "https://www.stack-inference.com/run_deployed_flow?flow_id=64c136f9b77e903e81a80b44&org=4fd616bf-e63b-4287-bdfd-f2e7b2e0c888",
        {
            headers: {
                'Authorization':
                    'Bearer 116c699f-9f17-4741-bc58-6411357f763c',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}



function showLoadingIndicator() {
    var chatArea = document.getElementById("chatArea");
    var loadingBubble = document.createElement("div");
    loadingBubble.setAttribute("id", "loadingIndicator");
    loadingBubble.classList.add("message", "loading");
    loadingBubble.innerHTML = `<div class="dot-flashing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
    chatArea.appendChild(loadingBubble);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function removeLoadingIndicator() {
    var loadingIndicator = document.getElementById("loadingIndicator");
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}

// JavaScript for handling form submission and showing alert
document.addEventListener("DOMContentLoaded", function () {
    var helpRequestModal = document.getElementById('helpRequestModal');
    helpRequestModal.addEventListener('shown.bs.modal', function () {
        document.getElementById("helpRequestAlert").classList.add('d-none'); // Hide alert when modal opens
    });
});

function submitHelpRequest() {
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var location = document.getElementById('location').value.trim();
    var message = document.getElementById('message').value.trim();

    // Check if all fields are filled
    if (username && email && location && message) {
        console.log('Submitting help request:', { username, email, location, message });

        // Show alert message
        var alertBox = document.getElementById('helpRequestAlert');
        alertBox.textContent = 'Thank you, your message has been sent. We will get back to you shortly!';
        alertBox.classList.remove('d-none', 'alert-danger');
        alertBox.classList.add('alert-success', 'show');

        // Reset form
        document.getElementById('helpRequestForm').reset();

        // Close the modal after a delay of 2 seconds
        setTimeout(function () {
            // Retrieve the close button by its class name or ID
            var closeButton = document.querySelector('#helpRequestModal .btn-close');
            closeButton.click(); // Simulate click on the close button to close the modal
        }, 2000); // Delay set to 2 seconds

    } else {
        // If any field is empty, highlight it
        document.getElementById('helpRequestForm').querySelectorAll('input, textarea').forEach(function (input) {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                input.addEventListener('input', function () {
                    input.classList.remove('is-invalid');
                });
            }
        });
    }
}

