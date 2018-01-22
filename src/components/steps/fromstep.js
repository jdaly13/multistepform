import React from 'react';

export default class StepOne extends React.Component {
  render() {
    const { onAction } = this.props;
    return (
      <div>
        <h6>Enter From Address</h6>
        <div className="row">
          <div className="six columns">
            <label>Name</label>
            <input
              className="u-full-width"
              placeholder="Name"
              data-id="name"
              data-step="from"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.name}
              autoFocus
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Street</label>
            <input
              className="u-full-width"
              placeholder="Street"
              data-id="street"
              data-step="from"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.street}
            />
          </div>
        </div>
        <div className="row columns">
          <label>City</label>
          <input
            className="small"
            placeholder="City"
            data-id="city"
            data-step="from"
            type="text"
            onChange={onAction}
            value={this.props.wizardContext.from.city}
          />
          <label>State</label>
          <input
            className="small"
            placeholder="state"
            data-id="state"
            data-step="from"
            type="text"
            onChange={onAction}
            value={this.props.wizardContext.from.state}
          />
          <label>Zip</label>
          <input
            className="small"
            placeholder="zip"
            data-id="zip"
            data-step="from"
            type="text"
            onChange={onAction}
            value={this.props.wizardContext.from.zip}
          />
        </div>
      </div>
    );
  }
}

StepOne.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};
