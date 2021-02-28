import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import classes from './ScrollMessage.module.css';

function ScrollMessage(props) {
  return (
    <div className={`${classes['scroll-message']} ${classes[props.color]}`}>
      <p className={classes.text}>{props.text}</p>
      <FontAwesomeIcon icon={faAngleDoubleDown} className={classes.icon} />
    </div>
  );
}

export default ScrollMessage;
