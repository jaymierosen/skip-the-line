import React, { Component } from 'react';
import Home from './Home';
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
		// 
		this.state = {
			activeMenu: null,
			modalOpen: 'not-open'
		}
		/*
			what we're doing here is binding the context -- `this` -- to the class.
			`.bind` passes in the context -- `this` -- so that when we use this the function is sent a proper context. 
			What's a context? Don't worry if you're like WTF! It's some extra-level JS.
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
		*/
		this.modalClose = this.modalClose.bind(this)
		this.modalOpen = this.modalOpen.bind(this)
	}
	changeActiveMenu() {

	}

	modalOpen() {
		console.log('working?');
		if(this.state.modalOpen === 'not-open') {
			this.setState({
				modalOpen: 'open'
			})
		} else {
			this.setState({
				modalOpen: 'not-open'
			})
		}
	}
	modalClose() {
		console.log('working?');
		if(this.state.modalOpen === 'open') {
			this.setState({
				modalOpen: 'not-open'
			})
		}
	}
	render() {
		return (
			<Router>
				{/* Router takes only one child element */}
				<div>
				{/* So, we can bind these bad mammajammas in the class constructor!  */}
					<Cart modalOpen={this.modalOpen} modalDisplay={this.state.modalOpen} modalClose={this.modalClose} />
					<header>
						<section className="hero">
							<div className="hero-body">
								<div className="container">
									<h1 className="title is-uppercase has-text-centered">Skip the Line</h1>
								</div>
							</div>
						</section>
					</header>
					<div>
						<div className="tabs is-centered">
							<ul>
								<li id="wilbur"><Link to="/wilbur">Wilbur</Link></li>
								<li id="avenue"><Link to="/avenue">Avenue Open Kitchen</Link></li>
								<li id="cj"><Link to="/cj">CJ&rsquo;s Lunchbox</Link></li>
							</ul>
						</div>
						<Router exact path="/" component={Home}/>
						<Route path="/wilbur" component={Wilbur}/>
						<Route path="/avenue" component={Avenue}/>
						<Route path="/cj" component={CJ}/>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
