import React from 'react';
import { getshippingOption, getShippingRate } from '../partials/utils';

export default class ShippingLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.info;
    console.log(props.info);
  }

  render() {
    return (
      <section className="shippinglabel">
        <h6>Final Label</h6>
        <div className="info">
          <span className="block">
            {getshippingOption(this.state.shippingOption)} Shipping
          </span>
          <span className="block">
            {' '}
            ${getShippingRate(
              this.state.weight,
              this.state.shippingOption
            )}{' '}
            Shipping Cost{' '}
          </span>
        </div>
        <div className="from">
          <span className="block">{this.state.from.name}</span>
          <span className="block">{this.state.from.street}</span>
          <span className="block">
            {this.state.from.city}, {this.state.from.state}{' '}
            {this.state.from.zip}{' '}
          </span>
        </div>
        <div className="to">
          <span className="block">{this.state.to.name}</span>
          <span className="block">{this.state.to.street}</span>
          <span className="block">
            {this.state.to.city}, {this.state.to.state} {this.state.to.zip}
          </span>
        </div>
        <div> </div>
      </section>
    );
  }
}
