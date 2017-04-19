import React from 'react';

class Intro extends React.Component {
	render(){
        const styles =  { backgroundImage: 'url(http://www.e-luksys.com/images/black-and-white-man-person-hands.jpg)' };
        
		return (
 			<section className="intro" style={styles}>

                <div className="intro-content">
                    <h1 className="section-title">
                        <span className="me">Evaldas Luksys</span>
                        <span className="intro-skills">
                            <p>I am full stack Web Developer</p>
                        </span>
                    </h1>
                   
                </div>

                <a className="ca3-scroll-down-link ca3-scroll-down-arrow"></a>
            </section>
		)
	}
} 

export default Intro;