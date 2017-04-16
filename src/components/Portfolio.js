import React from 'react';

class Portfolio extends React.Component {
	render(){

		const imgUrl = require('../images/travellers-choices.jpg');
        const styles =  { backgroundImage: 'url('+imgUrl+')' };

        const imgUrl1 = require('../images/evos.jpg');
        const styles1 =  { backgroundImage: 'url('+imgUrl1+')' };

		return (
		 	<section className="portfolio">
                 <div className="c c-2">
                    <h2 className="section-title">Portfolio</h2>
                    <div className="frow centered">
                        <div className="col-md-1-2">
                            <div className="item portfolio">
                                {   
                                    
                                }
                                <div className="overlay-image background-image" style={styles}></div>
                                <div className="content">
                                    <h3 className="item-title">Travellers Choices</h3>
                                    <div className="description">
                                        <p>Design, Web Development</p>
                                    </div>
                                </div>
                                <a href="http://travellerschoices.co.uk" target="_blank" className="visit-link"><span>Visit</span> <i className="fa fa-external-link" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-md-1-2">
                            <div className="item portfolio">
                                <div className="overlay-image background-image" style={styles1}></div>
                                <div className="content">
                                    <h3 className="item-title">Evos WordPress theme</h3>
                                    <div className="description">
                                        <p>Design, Web Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1-2">
                            <div className="item portfolio clear-styles">
                                <h3 className="item-title">More coming soon...</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		)
	}
}

export default Portfolio;