import React from 'react';
import './SideBar.css';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SideBarComponents from './SideBarComponents';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button'



const SideBar = () => {
    return (
        <div className='sidebar'>
            <AlternateEmailIcon />

            <SideBarComponents active text='Home' Icon={HomeIcon} />
            <SideBarComponents text='Explore' Icon={ExploreIcon} />
            <SideBarComponents text='Notifications' Icon={NotificationsIcon} />
            <SideBarComponents text='Messages' Icon={MessageIcon} />
            <SideBarComponents text='Bookmarks' Icon={BookmarkIcon} />
            <SideBarComponents text='List' Icon={ListAltIcon} />
            <SideBarComponents text='Profile' Icon={PersonIcon} />
            <SideBarComponents text='More' Icon={ExpandMoreIcon} />


            <Button variant="outlined" className='tweetBtn' fullWidth>Tweet</Button>
        </div>
    );
}

export default SideBar;