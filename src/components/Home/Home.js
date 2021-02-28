import classes from './Home.module.css';
import Menu from '../Menu/Menu';
import ScrollMessage from '../ScrollMessage/ScrollMessage';

function Home() {
  return (
    <section className={classes.home}>
      <Menu color='light' isMobile='true' />

      <div className={classes['scroll-message']}>
        <ScrollMessage color='light' text='scroll down to see more' />
      </div>
    </section>
  );
}

export default Home;
