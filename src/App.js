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
		this.state = {
			wilburActive: 'not-active',
			avenueActive: 'not-active',
			cjActive: 'not-active',
			modalOpen: 'not-open'
		}
	}
	wilburActive() {
		if(this.state.wilburActive === 'not-active') {
			this.setState({
				wilburActive: 'is-active',
				avenueActive: 'not-active',
				cjActive: 'not-active'
			})
		} else {
			this.setState({
				wilburActive: 'not-active',
				avenueActive: 'not-active',
				cjActive: 'not-active'
			})
		}
	}
	avenueActive() {
		if(this.state.avenueActive === 'not-active') {
			this.setState({
				avenueActive: 'is-active',
				wilburActive: 'not-active',
				cjActive: 'not-active'
			})
		} else {
			this.setState({
				avenueActive: 'not-active',
				wilburActive: 'not-active',
				cjActive: 'not-active'
			})
		}
	}
	cjActive() {
		if(this.state.cjActive === 'not-active') {
			this.setState({
				cjActive: 'is-active',
				avenueActive: 'not-active',
				wilburActive: 'not-active'
			})
		} else {
			this.setState({
				cjActive: 'not-active',
				avenueActive: 'not-active',
				wilburActive: 'not-active'
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
					<Cart modalOpen={this.modalOpen.bind(this)} modalDisplay={this.state.modalOpen} modalClose={this.modalClose.bind(this)} />
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
								<li id="wilbur" className={this.state.wilburActive} onClick={this.wilburActive.bind(this)}><Link to="/wilbur">Wilbur</Link></li>
								<li id="avenue" className={this.state.avenueActive} onClick={this.avenueActive.bind(this)}><Link to="/avenue">Avenue Open Kitchen</Link></li>
								<li id="cj" className={this.state.cjActive} onClick={this.cjActive.bind(this)}><Link to="/cj">CJ&rsquo;s Lunchbox</Link></li>
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
