import React from 'react';
import { Avatar } from '@mui/material';
import './Tweets.css'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
const Tweets = ({ name, username, verified, text, image, avatar }) => {
    return (
        <div className='tweets'>
            <div className='tweet'>
                <Avatar src={avatar} />
            </div>
            <div className="tweet_body">
                <div className='tweet_header'>
                    <div className='tweet_headerText'>
                        <h3>{name}{" "}<span>{verified && <VerifiedOutlinedIcon className='verify_icon' />}{" "}<span style={{ color: '#3b3a3a70', fontSize: '1rem' }}>{username}</span></span></h3>
                    </div>
                    <div className='tweet_headerDescription'>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>

                <img src={image} alt=''></img>

                <div className='tweet_footer'>
                    <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                    <RepeatOutlinedIcon fontSize='small' />
                    <FavoriteBorderOutlinedIcon fontSize='small' />
                    <IosShareOutlinedIcon fontSize='small' />
                </div>
            </div>
        </div>

    );
}

export default Tweets;
