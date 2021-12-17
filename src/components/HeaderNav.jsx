import { NavLink } from 'react-router-dom';
import css from './HeaderNav.module.css'

function HeaderNav() {
  return (
    <div className='container'>
      <div className={css.navContainer}>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fblack%2Fadministrator-512.png&f=1&nofb=1'
          alt='user'
        />
        <nav className={css.link + ' mainNav'}>
          <NavLink className={css.navLink} exact to='/'>
            Home
          </NavLink>
          <NavLink className={css.navLink} exact to='/add'>
            Add User
          </NavLink>
          <NavLink className={css.navLink} exact to='/all'>
            All Users
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNav;
