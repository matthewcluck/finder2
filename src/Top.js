import React from 'react';
import Popup from './Popup'

export default function Top(props) {

    function sub() {
        console.log("working");
      }

    return(
    <>
        <nav className={props.name}>
            <h3 id='title'>
                finder
            </h3>
            <h3 id='un'>
                {props.un}
            </h3>
        </nav>
    </>
    )
}