import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile=() => {
	return <div>
		<div>
			<img src='https://avatars.mds.yandex.net/i?id=c8f5f19b7bbba69ce97f92e6e11f7b1b-5334779-images-thumbs&n=13'></img>
		</div>
		<div>
			ava+description
		</div>
		<MyPosts />
	</div>
}

export default Profile;
