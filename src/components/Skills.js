import React from 'react';
import { Link } from 'react-router';
import { getSkills } from '../helpers';
import Item from './Item';

class Skills extends React.Component {
	render(){
        const itemSize = "col-md-1-2";
        const items = getSkills().map((item, index) =>
            <Item key={index} icon={item[0]} heading={item[1]} content={item[2]} itemSize={itemSize} />
        );

    	return (
    		<section className="skills">
                <div className="c">
                    <h2 className="section-title">Some of my skills..</h2>
                    <div className="frow centered">{items}</div>
                    <br/>
                    <h2><i className="fa fa-file-image-o" aria-hidden="true"></i> Download CV as:</h2>
                    <a href="http://www.e-luksys.com/docs/EvaldasLCV.docx">Doc</a> or <a target="_blank" href="http://www.e-luksys.com/docs/EvaldasLCV.pdf">PDF</a> file.
                </div>
            </section>
    	)
    }
}

export default Skills;