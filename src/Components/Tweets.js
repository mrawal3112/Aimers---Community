import React from 'react';
import { Avatar } from '@mui/material';
import logo from '../Images/viratkohli.jpg';
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
                <Avatar src={logo} />
            </div>
            <div className="tweet_body">
                <div className='tweet_header'>
                    <div className='tweet_headerText'>
                        <h3>Virat kohli{" "}<span><VerifiedOutlinedIcon className='verify_icon' />{" "}<span style={{ color: '#3b3a3a70', fontSize: '1rem' }}>@imVkohli</span></span></h3>
                    </div>
                    <div className='tweet_headerDescription'>
                        <p>
                            Not the result we wanted but I am so proud of the character shown by the boys throughout the tournament.
                            A disappointing end but we can hold our heads high.
                            Thank you to all the fans, management and the support staff for your constant support.
                        </p>
                    </div>
                </div>
                <img src='https://pbs.twimg.com/media/FBe2XH7VUAQTxu0?format=jpg&name=360x360' alt='nologo'></img>

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
