import React from 'react';
import './styles.css';
import getIcon from '../garden/utils/icon';
import getButtons from './preconditions';

const IconWrapper = ({sendFunction, itemState}) => {
    
    const buttonOneData = getButtons(itemState, "PRIMARY");
    const buttonTwoData = getButtons(itemState, "SECONDARY");
    
    let buttonOneClassName = "buttonWrapperOne";
    if (!buttonOneData.clickable) {
        buttonOneClassName = buttonOneClassName + " grayedOut";
    }
    let buttonTwoClassName = "buttonWrapperTwo";
    if (!buttonTwoData.clickable) {
        buttonTwoClassName = buttonTwoClassName + " grayedOut";
    }
    return (
        <>
            <div className="iconWrapper">

            <div className={buttonOneClassName}>
            <button onClick={e => (buttonOneData.clickable ? 
                (sendFunction(e)) : (() => {}))}>{buttonOneData.name}</button>
            </div>

            <div className={buttonTwoClassName}>
            <button onClick={e => (buttonTwoData.clickable ? 
                (sendFunction(e)) : (() => {}))}>{buttonTwoData.name}</button>
            </div>

            <div className="imgWrapper">
            <img src={getIcon(itemState)} alt={itemState.name}></img>
            </div>

            </div>
        </>
    );
};

export default IconWrapper;