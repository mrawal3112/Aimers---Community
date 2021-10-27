import React, { useState, useEffect } from 'react';
import './NewFeeds.css'
import { AiOutlineStar } from 'react-icons/ai'
import FeedBox from './TweetBox';
import Tweets from './Tweets';
// import logo from '../Images/virat-kohli.jpg'
// import image from '../Images/ProfilePic.png'
import db from '../firebase';
import FlipMove from 'react-flip-move';

const NewFeeds = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <div className='feed'>
            <div className='feed_header'>
                <h2>Home</h2>
                <AiOutlineStar className='glitter' />
            </div>
            <FeedBox />
            <FlipMove>
                {posts.map(post => (
                    <Tweets key={post.text} name={post.name} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image} />
                ))}
            </FlipMove>
        </div>
    );
}

export default NewFeeds;



