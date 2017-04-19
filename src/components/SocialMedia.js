import React from 'react';

class SocialMedia extends React.Component {
	render(){
		return (
			<ul className="social-media">
                <li className="social-media-item"><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li className="social-media-item"><a href="http://www.linkedin.com/in/evaldas-luksys-56a7047a" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li className="social-media-item"><a href="mailto:luksys.evaldas@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
            </ul>
		)
	}
} 

export default SocialMedia;