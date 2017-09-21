// challenge: combine Avenue, CJ and Wilbur in one component
import React, { Component } from 'react';
// import { getFunName } from './functions';

class Restaurants extends Component {
	constructor() {
		super();
		 /*TODO: Let's re-bind all these methods -- `this.addMenuItem` into the constructor! I did this in App.js as an example for ya as an example.This way, we don't have to constantly bind `this`
		 Extra points: Use an array of JS objects + .map() -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map to dynamically generate these HTML elements
		 .map() tl;dr : creates a NEW array based on the function you pass it! */
		this.addMenuItem = this.addMenuItem.bind(this)
	}
	addMenuItem() {
		console.log('working?');
	}
	render() {
		{ /* https://stackoverflow.com/questions/44759705/rendering-an-array-of-html-elements */ }
		// ES6 VERSION =>
		// const MyRepeatedlyOccuringComponent = (n) => (<li key={n}>There goes Camel {n}</li>)
		// const camels = [1,22,333,4444,55555]
		// const caravan = camels.map((n) => MyRepeatedlyOccuringComponent(n))
		// ES5 VERSION =>
		const MyRepeatedlyOccuringComponent = function MyRepeatedlyOccuringComponent(n) {
				return React.createElement(
					"li", { key: n }, "", n
				);
		};
		const menuItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4', 'Menu Item 5'];
		const menuItemsDisplay = menuItems.map(function (n) {
				return MyRepeatedlyOccuringComponent(n);
		});
		return (
			<div className="menu-container">
				{menuItemsDisplay}
			</div>
		);
	}
}

export default Restaurants;