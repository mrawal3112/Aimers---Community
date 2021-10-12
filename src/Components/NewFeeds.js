import React from 'react';
import './NewFeeds.css'
import { AiOutlineStar } from 'react-icons/ai'
import FeedBox from './TweetBox';
import Tweets from './Tweets';

const NewFeeds = () => {
    return (
        <div className='feed'>
            <div className='feed_header'>
                <h2>Home</h2>
                <AiOutlineStar className='glitter' />
            </div>
            <FeedBox />
            <Tweets />
            <Tweets />
        </div>
    );
}

export default NewFeeds;