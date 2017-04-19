import React from 'react';

import HeaderTop from './HeaderTop';
import HeaderInner from './HeaderInner';

class Header extends React.Component {

	render() {
		return (
			<header className="mastheader" id="mastheader">
				<HeaderTop />
				{ /*<HeaderInner /> */}
        	</header>
		)
	}
}

export default Header;