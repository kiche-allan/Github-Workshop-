import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="App">
  <header>
    <h1>WhatsApp Bot</h1>
  </header>
  <main>
    <div id="messages">
      {messages.map((message, index) => (
        <div key={index} className="message">{message}</div>
      ))}
    </div>
    <form id="message-form" onSubmit={handleSubmit}>
      <input type="text" id="message-input" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" id="send-btn">Send</button>
    </form>
  </main>
</div>
  );
}

export default App;
