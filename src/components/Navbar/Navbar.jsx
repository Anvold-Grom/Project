import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = (props) => {
    return (
         <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/Profile' activeClassName={s.activeLink}>Профиль</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to='/Dialogs' activeClassName={s.activeLink}>Сообщения</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/News' activeClassName={s.activeLink}>Новости</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/Music' activeClassName={s.activeLink}>Музыка</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to='/Settings' activeClassName={s.activeLink}>Настройки</NavLink>
    </div>
    <div className={s.itemFriends}>
      <NavLink to='/Friends' activeClassName={s.activeLink}>Друзья</NavLink>
    </div>
  </nav> 
    );
}

export default Navbar;