import React from 'react';

class Item extends React.Component {
	render(){
		return(
			<div className={this.props.itemSize}>
			    <div className="item skill">
			        <h3 className="item-title"><span className="icon"><i className="fa fa-{this.props.icon}" aria-hidden="true"></i></span>{this.props.heading}</h3>
			       	{this.props.content}
			    </div>
			</div>
		)
	}
}
export default Item;
