import classes from './ProfileInfo.module.css';

const ProfileInfo=(props) => {
	return (
		<div>
			<div>
				<img src='https://avatars.mds.yandex.net/i?id=c8f5f19b7bbba69ce97f92e6e11f7b1b-5334779-images-thumbs&n=13'></img>
			</div>
			<div className={classes.descriptionBlock}>
				ava+description
			</div>
		</div>
	)
};

export default ProfileInfo;
