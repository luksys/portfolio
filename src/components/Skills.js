import React from 'react';
import { getSkills } from '../helpers';
import Item from './Item';

class Skills extends React.Component {
	render(){

        const items = getSkills().map((item, index) =>
            <Item key={index} icon={item[0]} heading={item[1]} content={item[2]} itemSize="col-md-1-2" />
        );

    	return (
           
    		<section className="skills">
                
                <div className="c">
                    <h2 className="section-title">What I can do for you.</h2>
                    <div className="frow centered">{items}</div>
                </div>
            </section>

    	)
    }
}

export default Skills;