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
    messageBubble.classList.add("message", type); // 'sent' or 'received'
    messageBubble.textContent = message;
    chatArea.appendChild(messageBubble);
    chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the newest message
}


async function chatbotResponse(userMessage) {
    showLoadingIndicator(); // Show loading indicator

    try {
        const response = await query({ "in-0": userMessage, "user_id": "example_user_id" });
        console.log("API Response:", response); // Log the response for debugging

        removeLoadingIndicator(); // Ensure loading indicator is removed

        var reply = response["out-1"];
        displayMessage(reply, "received");
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
        headers: {'Authorization':
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
