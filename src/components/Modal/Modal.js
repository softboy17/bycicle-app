import React, { useState } from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
            <div className="modal__overlay" onClick={handleClose}></div>
            <div className="modal__content">
                <div className="modal__button__container">
                    <button className="modal__button" onClick={handleClose}>Close Modal</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;

