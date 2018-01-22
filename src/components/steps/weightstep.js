import React from 'react';

export default class StepThree extends React.Component {
  render() {
    const { onAction } = this.props;
    const { weight } = this.props.wizardContext;
    return (
      <div>
        <h6>Enter Weight</h6>
        <div className="row">
          <div className="six columns">
            <label>Weight</label>
            <input
              className="u-full-width"
              placeholder="Weight"
              data-id="weight"
              type="text"
              onChange={onAction}
              value={weight}
              autoFocus
            />
          </div>
        </div>
      </div>
    );
  }
}
