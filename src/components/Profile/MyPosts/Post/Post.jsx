import React from 'react';
import classes from './Post.module.css';

const Post=(props) => {
	return (
		<div className={classes.item}>
			<img src='https://avatars.mds.yandex.net/i?id=1e722a6d7d3467b63e9e23d90fa64e48-7058209-images-thumbs&n=13&exp=1' />
			{props.message}
			<div>
				<span>like</span> {props.counter}
			</div>
		</div>
)}

export default Post;
