import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import './css/layout.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
					<Match exactly pattern="/" component={Home} />
				<Footer />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));