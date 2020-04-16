import React from 'react'
import s from './Sidebar.module.css';

const Sidebar = (props) => {

    let friendsElements = 
        props.state.friendbar.map( f => <Sidebar name={f.name} id={f.id} /> );

    return (
        <div className={s.friendsItems}>
        { friendsElements }
   </div>

    );
}

export default Sidebar;