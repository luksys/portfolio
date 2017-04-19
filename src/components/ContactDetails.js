import React from 'react';

class ContactDetails extends React.Component {
	render(){
		return (
			<div className="c-details">
                <a className="c-detail" href="tel:+447743033510"><i className="fa fa-mobile icon" aria-hidden="true"></i><span className="c-detail-inner">+447743033510</span></a>
            </div>
		)
	}
} 

export default ContactDetails;