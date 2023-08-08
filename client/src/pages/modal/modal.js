import React, { useState } from 'react';
import './modal.css'
function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Modal Example</h1>
      <Modal />
    </div>
  );
}

export default App;
