import React, { Component } from 'react';
import classes from './Keypads.css';
import Keypad from './Keypad/Keypad';

class KeyPads extends Component {
	render() {
		return(
            <div className={classes.Keypads}>
               <div className={classes.Column1}>
                <Keypad value="0" />
                <Keypad value="A/C" />
                <Keypad value="%" />
                <Keypad value="/" />
               </div>
               <div className={classes.Column2}>
                <Keypad value="7" />
                <Keypad value="8" />
                <Keypad value="9" />
                <Keypad value="-" />
               </div>
               <div className={classes.Column3}>
                <Keypad value="4" />
                <Keypad value="5" />
                <Keypad value="6" />
                <Keypad value="+" />
               </div>
               <div className={classes.Column4}>
                <Keypad value="1" />
                <Keypad value="2" />
                <Keypad value="3" />
                <Keypad value="=" />
               </div>
            </div>
    	);
	}
}

export default KeyPads;




