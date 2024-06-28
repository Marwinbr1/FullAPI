import React from 'react';
import './BotaoAdd.css';

const BotaoAdd = ({ onClick }) => {
    return (
        <button className="botao-add" onClick={onClick}>
            <svg className="botao-add-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>add-outline</title>
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5,11H13v3a1,1,0,0,1-2,0V13H7a1,1,0,0,1,0-2h4V7a1,1,0,0,1,2,0v4h4a1,1,0,0,1,0,2Z"/>
            </svg>
        </button>
    );
};

export default BotaoAdd;
