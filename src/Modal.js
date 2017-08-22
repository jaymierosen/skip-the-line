import React, { Component } from 'react';

class Modal extends Component {
	render() {
		return(
			<div className={`modal ${this.props.modalDisplay}`}>
				<button className={`delete ${this.props.modalDisplay}`} aria-label="close" onClick={this.props.modalClose}></button>
				<div className="modal-content">
					<ul className="menu-list">
						<li>Menu Item</li>
					</ul>
					<a className="button is-warning">Edit</a>
					<a className="button is-danger">Remove</a>
				</div>
			</div>
		);
	}
}

export default Modal;