import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Portfolio from './Portfolio';

class Main extends React.Component {
    render(){
        return (
            <main className="main">
                <Intro />
                <Skills />
                <Portfolio />
            </main>
        )
    }
}

export default Main;