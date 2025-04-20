import React from 'react';

export default function TabButton({children,command,activeclass}){
    return(  <button className={activeclass} class="tab-button" onClick={command}>{children}</button>);
}