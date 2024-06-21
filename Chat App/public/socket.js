const socket = io();
let name;



do {
    name = prompt("Enter Your Name: ");
} while (!name);



console.log(name);


const sendBtn = document.getElementById("sendBtn");
const inputMessage = document.getElementById("message");
const divMessage = document.getElementById("messages");

socket.on("message", (message) => {
    const p = document.createElement("p");
    p.innerText = message;
    divMessage.appendChild(p);
    divMessage.scrollTop = divMessage.scrollHeight; // Auto scroll to the bottom
});

sendBtn.addEventListener("click", () => {
    const message = inputMessage.value;
    if (message.trim() !== "") {
        socket.emit("userMessage", message);
        inputMessage.value = ""; // Clear input field after sending
        inputMessage.focus(); // Set focus back to the input field
    }
});

inputMessage.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
