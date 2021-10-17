import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
import './Widgets.css';
import Suggestions from './Suggestions';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchIcon className='seacrhicon' />
                <input type='text' placeholder='Search Twitter'></input>
            </div>
            <div className='widgets_container'>
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={'1383013895611191297'}></TwitterTweetEmbed>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="imVkohli"
                    options={{ height: 400 }}
                />
            </div>
            <div className='widgets_container'>
                <h2>Who to Follow</h2>
                <Suggestions />
                <Suggestions />
            </div>
        </div>
    );
}

export default Widgets;