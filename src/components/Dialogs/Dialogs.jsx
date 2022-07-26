import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs=(props) => {

	let dialogsElements=props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements=props.messages.map(message => <Message message={message.massage} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;
