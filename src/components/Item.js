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
		const { itemSize, icon, heading, content} = this.props;
		return(
			<div className={itemSize}>
			    <div className="item skill">
			        <h3 className="item-title"><span className="icon"><i className={"fa fa-" + icon} aria-hidden="true"></i></span>{heading}</h3>
			       <div dangerouslySetInnerHTML={this.createMarkup(content)}></div>
			    </div>
			</div>
		)
	}
}
export default Item;
