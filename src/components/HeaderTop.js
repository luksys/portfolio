import React from 'react';

class HeaderTop extends React.Component {
	render(){
		return (
			<div className="mastheader-top">
                <div className="c-details">
                    <a className="c-detail" href="+447743033510"><i className="fa fa-mobile icon" aria-hidden="true"></i><span className="c-detail-inner">+447743033510</span></a>
                </div>
                <ul className="social-media">
                    <li className="social-media-item"><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                    <li className="social-media-item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li className="social-media-item"><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                </ul>
            </div>
		)
	}
}

export default HeaderTop;