import React, { Component } from 'react';
import Modal from './Modal';

class Cart extends Component {
	render() {
		const modalOpen = this.props.modalOpen;
		return (
			<div>
				<div className="cart-container">
					<i className="fa fa-shopping-cart" aria-hidden="true" onClick={modalOpen}></i>
				</div>
				<Modal />
			</div>
		);
	}
}

export default Cart;
