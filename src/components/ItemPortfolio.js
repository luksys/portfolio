import React from 'react';

class Item extends React.Component {
	constructor(props){
		super(props);
		this.createMarkup = this.createMarkup.bind(this);
	}
	createMarkup(content) {
		return {__html: content};
	};
	render(){
		const { imageLink, heading, done, projectUrl} = this.props;
		const style = {backgroundImage: 'url('+imageLink+')'};
		return(
			<div className={this.props.itemSize}>
                <div className="item portfolio">
                    <div className="overlay-image background-image" style={style}></div>
                    <div className="portfolio-content">
						 <div className="content">
	                        <h3 className="item-title">{heading}</h3>
	                        <div className="description">
	                            <div dangerouslySetInnerHTML={this.createMarkup(done)}></div>
	                        </div>
	                    </div>
	                    <a href={projectUrl} target="_blank" className="visit-link"><span>Visit</span> <i className="fa fa-external-link" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
		)
	}
}
export default Item;
