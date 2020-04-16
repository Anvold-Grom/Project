import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.muv}>
                <video className={s.autoVideo} width="100%" height="300px" preload="true" autoPlay="autoplay" loop="loop" src="https://ak7.picdn.net/shutterstock/videos/1025361527/preview/stock-footage-minimal-animation-design-pretty-kitty-strip-lover-vibes-pop-and-dance-mood.webm" alt=''>
                </video>
            </div>
                <div className={s.desBlock}>
                    ava + description
                </div>
          </div>
    );
}

export default ProfileInfo;