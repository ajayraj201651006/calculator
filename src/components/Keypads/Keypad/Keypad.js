import React from 'react';
import classes from './Keypad.css';

const keyPad = (props) => {
      return(
             <div className={classes.Keypad}>
              {props.value}
             </div>
      	);
}

export default keyPad;