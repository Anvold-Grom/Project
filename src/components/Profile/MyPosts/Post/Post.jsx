import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
                 <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-brT7T7fNILY6yl8lBO1XcfnGFsWigNP_4inoh4r7SrCJ6BrB'/>
                     { props.message }
                     <div>
                     <span>Like
                     { props.likesCount }
                     </span>
                     </div>
                  </div>
    );
}

export default Post;