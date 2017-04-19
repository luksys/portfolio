import React from 'react';
import { Link } from 'react-router';
const classNames = require('classnames');

class HeaderInner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false
		}

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(e){
		e.preventDefault();

		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	render(){
		const btnClasses = classNames({
			'hamburger' : true,
			'is-active' : this.state.menuOpen
		});

		const navClasses = classNames({
			'menu' : true,
			'is-active' : this.state.menuOpen
		});

		const hamburger = <a onClick={this.toggleMenu} href="#" className={btnClasses}>
			              <span className="top-bun"></span>
			              <span className="meat"></span>
			              <span className="bottom-bun"></span>
			            </a>;

		return (
		    <div className="mastheader-inner">
              	{hamburger}
                <nav className="main-nav">
                    <ul className={navClasses}>
                        <li className="menu-item"><Link activeOnlyWhenExact={true} activeClassName="active" to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
		)
	}
}

export default HeaderInner;