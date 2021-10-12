import React from 'react';
import { Avatar, Button } from '@mui/material';
import avatar from '../Images/ProfilePic.png';
import './TweetBox.css';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
const TweetBox = () => {
    return (
        <div className='tweetBox'>
            <form className='tweetBox_form'>
                <div className='tweetBox_input'>
                    <Avatar src={avatar} className='twetBox_avatar'></Avatar>
                    <input type='text' placeholder="What's Happening?"></input>
                </div>

                <div className='tweetBox_options'>
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "1rem" }}>
                        <ImageOutlinedIcon className='options' />
                        <GifOutlinedIcon className='options' />
                        <PollOutlinedIcon className='options' />
                        <EmojiEmotionsOutlinedIcon className='options' />
                    </div>
                    <div>
                        <Button className='tweetBox_Tweet' variant='outlined'>Tweet</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;