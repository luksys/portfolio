import React from 'react';
import SocialMedia from './SocialMedia';
import ContactDetails from './ContactDetails';

class Footer extends React.Component {
	render(){
		return (
			<footer className="mastfooter">
	            <div className="c">
	                <div className="mastfooter-inner">
	                   <SocialMedia />
	                   <ContactDetails />
	                </div>
	            </div>     
	        </footer>
		)
	}
}

export default Footer;