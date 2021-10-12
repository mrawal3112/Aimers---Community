import React from 'react';
import './SideBarComponents.css'
import '../App.css';

const SideBarComponents = ({ active, text, Icon }) => {
    return (
        <div className={`SideBarComponents ${active && 'SideBarComponents-active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SideBarComponents;