import React from 'react';
import { getPortfolio } from '../helpers';
import ItemPortfolio from './ItemPortfolio';

class Portfolio extends React.Component {
	render(){
        const itemSize = "col-md-1-2";
        const items = getPortfolio().map((item, index) =>
            <ItemPortfolio key={index} itemSize={itemSize} imageLink={item[0]} heading={item[1]} done={item[2]} projectUrl={item[3]} />
        );

        return (
            <section className="portfolio">
                 <div className="c c-2">
                    <h2 className="section-title">Portfolio</h2>
                    <div className="frow centered">
                        {items}
                    </div>
                </div>
            </section>
        )
	}
}

export default Portfolio;