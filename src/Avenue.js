import React, { Component } from 'react';
import { getFunName } from './functions';
// EXTRA MEGA CHALLENGE MODE: you can make one single component that will have the functionality of CJ/Wilbur/Avenue.js. 😈😈😈
class Avenue extends Component {
	constructor() {
		super();
		 /*TODO: Let's re-bind all these methods -- `this.addMenuItem` into the constructor! I did this in App.js as an example for ya as an example.This way, we don't have to constantly bind `this`
		 Extra points: Use an array of JS objects + .map() -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map to dynamically generate these HTML elements
		 .map() tl;dr : creates a NEW array based on the function you pass it! */
		this.addMenuItem = this.addMenuItem.bind(this)
		{ /* https://stackoverflow.com/questions/44759705/rendering-an-array-of-html-elements */ }
	}
	addMenuItem() {
		console.log('working?');
	}
	render() {
		const MyRepeatedlyOccuringComponent = (n) => (<p key={n}>There goes Camel {n}</p>)
		return (
			<div className="menu-container" menuList={getFunName()}>
			</div>
		);
	}
}

export default Avenue;
