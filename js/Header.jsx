import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: { showBack?: boolean }) => {
	let backLink;
	if (!props.showBack) {
		backLink = (
			<h2 className="back-link">
				<Link to="/search">Back to Search</Link>
			</h2>
		);
	} else {
		backLink = '';
	}
	return (
		<header>
			<h1>
				<Link to="/">Autolist React App</Link>
			</h1>
			{backLink}
		</header>
	);
};

Header.defaultProps = {
	showBack: false
};

export default Header;
