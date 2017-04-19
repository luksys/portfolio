import React from 'react';
import { Link } from 'react-router';
import SocialMedia from './SocialMedia';
import ContactDetails from './ContactDetails';

class HeaderTop extends React.Component {
	render(){
		return (
			<div className="mastheader-top">
                <Link to="/" className="logo"><img src={'http://www.e-luksys.com/images/logo.svg'} alt=""/></Link>
                <div className="HeaderTop-contact">
                    <ContactDetails />
                    <SocialMedia />
                </div>
            </div>
		)
	}
}

export default HeaderTop;