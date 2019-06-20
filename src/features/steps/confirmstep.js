import React from 'react';
import PropTypes from 'prop-types';
import { getshippingOption, getShippingRate } from '../../core/components/utils';
import {stepMapping} from '../../core/components/constants';

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.wizardContext;
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

  render() {
    return (
      <div>
        <h6> Confirm your information </h6>
        <p> From Information </p>
        <ul>{this.gettoFrom(stepMapping.from)}</ul>
        <p> To Information </p>
        <ul>{this.gettoFrom(stepMapping.to)}</ul>
        <p> Shipping Weight: {this.state.weight} </p>
        <p> Shipping Method: {this.getshippingOption()} </p>
        <p> Shipping Cost: {this.getShippingCost()} </p>
        <p data-id="confirm">
          {' '}
          To confirm <button data-step={stepMapping.confirm} onClick={this.props.onAction}>Confirm</button>{' '}
        </p>
        <p> To update information click previous below </p>
      </div>
    );
  }
}

Confirm.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};
