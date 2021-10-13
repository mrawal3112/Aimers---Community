import React from 'react';
import './NewFeeds.css'
import { AiOutlineStar } from 'react-icons/ai'
import FeedBox from './TweetBox';
import Tweets from './Tweets';
import logo from '../Images/virat-kohli.jpg'
import image from '../Images/ProfilePic.png'
const NewFeeds = () => {
    // const [posts, setPosts] = useState([]);
    return (
        <div className='feed'>
            <div className='feed_header'>
                <h2>Home</h2>
                <AiOutlineStar className='glitter' />
            </div>
            <FeedBox />
            <Tweets name='Mohit Rawal' username='mohitrawal7500' verified={true} text='My First Twitter Clone Post' image='' avatar={image} />
            <Tweets name='Virat Kohli' username='imVkohli' verified={true} text='Not the result we wanted but I am so proud of the character shown by the boys throughout the tournament. A disappointing end but we can hold our heads high. Thank you to all the fans, management & the support staff for your constant support' image='https://pbs.twimg.com/media/FBe2XH7VUAQTxu0?format=jpg&name=360x360' avatar={logo} />
        </div>
    );
}

export default NewFeeds;