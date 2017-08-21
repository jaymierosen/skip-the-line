import React, { Component } from 'react';

class Modal extends Component {
	render() {
		return(
			<div className="modal">
				<div className="modal-content">Menu item goes here</div>
				<a className="button is-warning">Edit</a>
				<a className="button is-danger">Remove</a>
			</div>
		);
	}
}

export default Modal;