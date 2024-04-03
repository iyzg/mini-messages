// This is the jQuery way of doing it
// $(".message-send").on('keyup', function (e) {
    // if (e.key === 'Enter' || e.keyCode === 13) {
        // console.log('Detected keyup on enter');
    // }
// })

let input = document.getElementsByClassName("message-send")[0];
let messages = document.getElementsByClassName("messages")[0];

// ISSUE: IT isn't clipping properly now ... huh
// I also want to animate the text coming in

// console.log(messages.childNodes[messages.childNodes.length-1]);
// for (const message in messages.children) {
    // console.log(message);
// }
console.log(messages.children);
for (let i = 0; i < messages.children.length; ++i) {
    console.log(messages.children[i]);
}
// console.log(messages);

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        console.log(`Read in "${input.value}"`);
        addNewMessage(messages, input.value);
        input.value = "";
    }
});

function addNewMessage(messages, newMessage) {
    let messageArray = messages.children;
    let messagesLen = messageArray.length;

    let messageClass = messagesLen % 2 === 0 ? "msg-other" : "msg-self";
    console.log(messageClass, messagesLen);
    const newMess = document.createElement("div");
    newMess.className = messageClass;

    const newText = document.createElement("p");
    newText.textContent = newMessage;

    newMess.appendChild(newText);
    messages.appendChild(newMess);
    newMess.scrollIntoView({behavior: "smooth"});
}
