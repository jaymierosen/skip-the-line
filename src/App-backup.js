import React, { Component } from 'react';
import Header from './Header';
import Cart from './Cart';
import Wilbur from './Wilbur';
import Avenue from './Avenue';
import CJ from './CJ';
import Footer from './Footer';
//ROUTING
import {
	BrowserRouter as Router,
	Route,
	Link //component to make <a>
} from 'react-router-dom';
import './index.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			title: 'Welcome!',
		}
		console.log(this.state);
	}
	displayText(){
		this.setState({
			displayText: 'Woo! You made this text appear. Magic.'
		})
	}
	render() {
		return (
			<div className="App">
				<Cart />
				<Header />
				<Router>
					<div>
						<div className="tabs is-centered">
							<ul>
								<li className="is-active has-text-centered"><Link to="/">Wilbur</Link></li>
								<li className="has-text-centered"><Link to="/">Avenue Open Kitchen</Link></li>
								<li className="has-text-centered"><Link to="/">CJ&rsquo;s Lunchbox</Link></li>
							</ul>
						</div>
						<Route exact path="/wilbur" component={Wilbur}/>
						<Route path="/about" component={Avenue}/>
						<Route path="/products" component={CJ}/>
					</div>
				</Router>
				<div>
					<Wilbur displayText={this.displayText.bind(this)} />
					<Avenue displayText={this.displayText.bind(this)} />
					<CJ displayText={this.displayText.bind(this)} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
