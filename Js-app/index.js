const messagesDiv = document.getElementById('messages');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (event) => {
	event.preventDefault();
	if (messageInput.value) {
		sendMessage(messageInput.value);
		messageInput.value = '';
	}
});

function sendMessage(message) {
	const messageElement = document.createElement('div');
	messageElement.classList.add('message');
	messageElement.textContent = message;
	messagesDiv.appendChild(messageElement);
}
