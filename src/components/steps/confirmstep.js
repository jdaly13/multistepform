import React from 'react';
import { getshippingOption, getShippingRate } from '../../partials/utils';

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.wizardContext;
    this.confirmInfo = this.confirmInfo.bind(this);
  }

  gettoFrom(keye) {
    return Object.keys(this.state[keye]).map((val, i) => {
      return (
        <li key={i}>
          {' '}
          {val} : {this.state[keye][val]}{' '}
        </li>
      );
    });
  }

  getShippingCost() {
    if (typeof parseFloat(this.state.weight) !== 'number') {
      return <span> Not a number </span>;
    }
    return (
      <span>
        {' '}
        {getShippingRate(this.state.weight, this.state.shippingOption)}{' '}
      </span>
    );
  }

  getshippingOption() {
    return getshippingOption(this.state.shippingOption);
  }

  confirmInfo() {
    this.props.onAction(this.state);
  }

  render() {
    return (
      <div>
        <h6> Confirm your information </h6>
        <p> From Information </p>
        <ul>{this.gettoFrom('from')}</ul>
        <p> To Information </p>
        <ul>{this.gettoFrom('to')}</ul>
        <p> Shipping Weight: {this.state.weight} </p>
        <p> Shipping Method: {this.getshippingOption()} </p>
        <p> Shipping Cost: {this.getShippingCost()} </p>
        <p>
          {' '}
          To confirm <button onClick={this.confirmInfo}>Confirm</button>{' '}
        </p>
        <p> To update information click previous below </p>
      </div>
    );
  }
}
