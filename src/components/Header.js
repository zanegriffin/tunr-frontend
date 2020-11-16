import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export const Header = (props) => {

    

    return(
        <div className='header-body'>
            <header>
                <h1>TUNR.</h1>
                <div onClick={() => props.setToggle(!props.toggle)}>
                    {props.toggle ? <FontAwesomeIcon icon={faToggleOn} size='4x'/> : <FontAwesomeIcon icon={faToggleOff} size='4x'/>}
                </div>
                <h3>FOR ALL YOUR PLAYLIST NEEDS</h3>
            </header>
            <div className='header-border'></div>
        </div>
        
    )
}