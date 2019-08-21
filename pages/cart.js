import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import CartList from '../components/cart/Cart';

class Cart extends React.Component {
  render () {
    return  (
    <Fragment>
      <Header />
      <CartList />
    </Fragment>
    )
  }
}

export default connect(
  null,
  null,
)(Cart)