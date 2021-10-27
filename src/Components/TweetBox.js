import React, { useState, useRef } from 'react';
import { Avatar, Button } from '@mui/material';
import avatar from '../Images/ProfilePic.png';
import './TweetBox.css';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import db from '../firebase';


const TweetBox = () => {
    const [newTweet, setNewTweet] = useState('');
    const [image, setImage] = useState(null);
    const selectImage = useRef(null);
    function sendTweet(e) {
        e.preventDefault();
        db.collection('posts').add({
            name: "Mohit Rawal",
            username: 'mohitrawal7500',
            verified: true,
            text: newTweet,
            avatar: 'https://m.media-amazon.com/images/M/MV5BMjc5NTM5NjUyMV5BMl5BanBnXkFtZTgwMDEwMzU1OTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
            image: image
        }
        )
        setNewTweet('');
        setImage('');
    }
    function selectPicture() {
        selectImage.current.click();
    }
    function onImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }
    return (
        <div className='tweetBox'>
            <form className='tweetBox_form'>
                <div>
                    <div className='tweetBox_input'>
                        <Avatar src={avatar} className='tweetBox_avatar'></Avatar>
                        <input type='text' placeholder="What's Happening?" value={newTweet} onChange={e => setNewTweet(e.target.value)}></input>
                    </div>
                    <img src={image} alt='' className={image ? 'tweetImage' : ''}></img>
                </div>
                <div className='tweetBox_options'>
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "1rem" }}>
                        <ImageOutlinedIcon className='options' onClick={selectPicture} />
                        <input type='file' style={{ display: 'none' }} ref={selectImage} onChange={onImageChange} />
                        <GifOutlinedIcon className='options' />
                        <PollOutlinedIcon className='options' />
                        <EmojiEmotionsOutlinedIcon className='options' />
                    </div>
                    <div>
                        {newTweet.length === 0 ? <Button type='submit' className='tweetBox_Tweet' variant='outlined' onClick={sendTweet} disabled style={{ opacity: ".5" }}>Tweet</Button> : <Button type='submit' className='tweetBox_Tweet' variant='outlined' onClick={sendTweet} >Tweet</Button>}

                    </div>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;