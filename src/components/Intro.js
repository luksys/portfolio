import React from 'react';

class Intro extends React.Component {
	render(){
		const imgUrl = require('../images/coding.jpg');
        const styles =  { backgroundImage: 'url('+imgUrl+')' };
        
		return (
 			<section className="intro" style={styles}>

                <div className="intro-content">
                    <div className="me">Evaldas Luksys</div>
                    <div className="intro-skills">
                        <p>I am full stack <span>Web Developer</span></p>
                    </div>
                </div>

                <a className="ca3-scroll-down-link ca3-scroll-down-arrow"></a>
            </section>
		)
	}
} 

export default Intro;