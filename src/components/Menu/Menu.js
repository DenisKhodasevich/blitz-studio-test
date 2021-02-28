import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import classes from './Menu.module.css';

const MobileMenu = styled.nav`animation: 1s ${keyframes`${fadeInLeft}`} 0s`;

function Menu(props) {
  function handleOpenClick(e) {
    e.preventDefault();
    const mobileMenu = document.querySelector(`.${classes['mobile-menu']}`);
    mobileMenu.style.display = 'flex';
  }

  function handleCloseClick(e) {
    e.preventDefault();
    const mobileMenu = document.querySelector(`.${classes['mobile-menu']}`);
    mobileMenu.style.display = 'none';
  }

  if (props.isMobile) {
    return (
      <div className={classes.container}>
        <nav className={`${classes.menu} ${classes[props.color]}`}>
          <a className={classes.link} href='#'>home</a>
          <a className={classes.link} href='#'>about me</a>
          <a className={classes.link} href='#'>portfolio</a>
          <a className={classes.link} href='#'>contact</a>
        </nav>

        <div onClick={handleOpenClick} className={classes.button}>
          <FontAwesomeIcon icon={faInfinity} className={classes.icon} />
          <span>menu</span>
        </div>

        <MobileMenu className={classes['mobile-menu']}>
          <FontAwesomeIcon
            icon={faTimes}
            className={classes['close-button']}
            onClick={handleCloseClick}
          />

          <a className={classes['mobile-link']} href='#'>home</a>
          <a className={classes['mobile-link']} href='#'>about me</a>
          <a className={classes['mobile-link']} href='#'>portfolio</a>
          <a className={classes['mobile-link']} href='#'>contact</a>
        </MobileMenu>
      </div>
    );
  }

  return (
    <nav className={`${classes.menu} ${classes[props.color]}`}>
      <a className={classes.link} href='#'>home</a>
      <a className={classes.link} href='#'>about me</a>
      <a className={classes.link} href='#'>portfolio</a>
      <a className={classes.link} href='#'>contact</a>
    </nav>
  );
}

export default Menu;
