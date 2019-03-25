import React from 'react';
import profilePic from '../images/sowmya.jpg';
const ProfilePicture = () => {
    return (
        <div className="profileImage">
        <img src={profilePic} alt="sowmya profile" className="img-circle profileImage"/>
        </div>
    );
};

export default ProfilePicture;