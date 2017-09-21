import React, { Component } from 'react';
import Home from './Home';
import Cart from './Cart';
import Restaurants from './Restaurants';
// import Wilbur from './Wilbur';
// import Avenue from './Avenue';
// import CJ from './CJ';
import Footer from './Footer';
//ROUTING
import {
	BrowserRouter as Router,
	Route,
	Link //component to make <a>
} from 'react-router-dom';
import './index.css';

class App extends Component {
	// constructor function sets up intial states & you can bind the this keyword with functions, too
	constructor(){
		// you need super() in order to use the 'this' keyword
		super();
		this.state = {
			activeMenu: 'not-active',
			modalOpen: 'not-open'
		}
		/*
			what we're doing here is binding the context -- `this` -- to the class.
			`.bind` passes in the context -- `this` -- so that when we use this the function is sent a proper context. 
			What's a context? Don't worry if you're like WTF! It's some extra-level JS.
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
		*/
		this.activeMenu = this.changeActiveMenu.bind(this)
		this.modalClose = this.modalClose.bind(this)
		this.modalOpen = this.modalOpen.bind(this)
	}
	changeActiveMenu() {
		if(this.state.activeMenu === 'not-active') {
			this.setState({
				activeMenu: 'is-active',
			})
		} else {
			this.setState({
				activeMenu: 'not-active'
			})
		}
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
								<li id="wilbur" className={this.state.activeMenu} onClick={this.changeActiveMenu}><Link to="/restaurants">Wilbur</Link></li>
								<li id="avenue" className={this.state.activeMenu} onClick={this.changeActiveMenu}><Link to="/restaurants">Avenue Open Kitchen</Link></li>
								<li id="cj" className={this.state.activeMenu} onClick={this.changeActiveMenu}><Link to="/restaurants">CJ&rsquo;s Lunchbox</Link></li>
							</ul>
						</div>
						<Router exact path="/" component={Home}/>
						<Route path="/restaurants" component={Restaurants}/>
						<Route path="/restaurants" component={Restaurants}/>
						<Route path="/restaurants" component={Restaurants}/>
						{/* <Route path="/restaurants" component={Restaurants}/> */}
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
