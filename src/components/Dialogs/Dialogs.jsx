import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs=() => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<div className={classes.dialog + ' ' + classes.active}>
					<NavLink to="/dialogs/1">Natalya</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/2">Marina</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/3">Vasya</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/4">Loki</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/5">Tor</NavLink>
				</div>
			</div>
			<div className={classes.messages}>
				<div className={classes.message}>Hello</div>
				<div className={classes.message}>Privet</div>
				<div className={classes.message}>Hi</div>
			</div>
		</div>
	)
}

export default Dialogs;
