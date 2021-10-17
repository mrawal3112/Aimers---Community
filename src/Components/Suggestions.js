import React from 'react';
import { Avatar } from '@mui/material';
import logo from '../Images/shahid.jpg'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import './Suggestions.css'

const Suggestions = () => {
    return (
        <div className='suggestions'>
            <Avatar src={logo}></Avatar>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '0 .5rem', flexWrap: 'wrap' }}>
                <h3>Shahid Kapoor{" "}<span><VerifiedOutlinedIcon className='verify_icon' />{" "}</span></h3>
                <h5>@shahidkapoor</h5>
            </div>
            <a href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw" className="follow-button" data-show-count="false">Follow</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    );
}

export default Suggestions;