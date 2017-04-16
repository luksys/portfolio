import React from 'react';
// import Header from './Home';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default App;