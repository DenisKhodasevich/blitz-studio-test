import classes from './AboutMe.module.css';
import Menu from '../Menu/Menu';
import ScrollMessage from '../ScrollMessage/ScrollMessage';

function AboutMe() {
  return (
    <section className={classes['about-me']}>
      <Menu color='dark' />

      <div className={classes.content}>
        <div className={classes.photo}></div>

        <div className={classes['text-content']}>
          <h2 className={classes.heading}>about me</h2>
          <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className={`${classes.text} ${classes['last-paragraph']}`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className={classes.name}>Jason Wood</p>
        </div>
      </div>

      <div className={classes['scroll-message']}>
        <ScrollMessage color='dark' text='keep scrolling, there is still more to come.' />
      </div>
    </section>
  );
}

export default AboutMe;
