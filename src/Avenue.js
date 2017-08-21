import React, { Component } from 'react';

class Wilbur extends Component {
	render() {
		return (
			<div className="menu-container">
				<aside className="menu">
					<p className="menu-label">Menu Heading</p>
					<ul className="menu-list">
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
					</ul>
					<p className="menu-label">Menu Heading</p>
					<ul className="menu-list">
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a>
							<ul>
								<li><a>Menu Item</a></li>
								<li><a>Menu Item</a></li>
								<li><a>Menu Item</a></li>
							</ul>
						</li>
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
					</ul>
					<p className="menu-label">Menu Heading</p>
					<ul className="menu-list">
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a>
							<ul>
								<li><a>Menu Item</a></li>
								<li><a>Menu Item</a></li>
								<li><a>Menu Item</a></li>
							</ul>
						</li>
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
					</ul>
					<p className="menu-label">Menu Heading</p>
					<ul className="menu-list">
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
					</ul>
					<p className="menu-label">Menu Heading</p>
					<ul className="menu-list">
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
						<li><a>Menu Item</a></li>
					</ul>
					<p className="menu-label">Menu Heading</p>
					<ul className="menu-list">
						<li><a>Menu Item</a></li>
					</ul>
				</aside>
			</div>
		);
	}
}

export default Wilbur;
