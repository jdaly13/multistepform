import React from 'react';
import {stepMapping, shippingOptionObj} from '../../core/components/constants';


export default class StepFour extends React.Component {
  render() {
    const { onAction, wizardContext: {shippingOption} } = this.props;
    return (
      <div>
        <h6>Enter shipping option</h6>
        <div className="row">
          <div className="six columns">
            <label>Shipping</label>
            <select
              onChange={onAction}
              value={shippingOption}
              data-id="shippingOption"
              data-step={stepMapping.shipping}
            >
              <option value={shippingOptionObj.ground}>
                Ground
              </option>
              <option value={shippingOptionObj.priority}>Express</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
