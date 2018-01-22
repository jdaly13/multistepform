import React from 'react';

import Navigation from '../partials/navigation';
import ProgressBar from '../partials/progressbar';
import PropTypes from 'prop-types';

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreviousBtn: false,
      showNextBtn: true,
      showConfirm: false,
      compState: 1,
      showNavigation: true,
      wizardContext: this.props.wizardContext
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleNested = this.handleNested.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  checkNavState(next) {
    if (next < 2) {
      this.setState({
        showPreviousBtn: false
      });
    }
  }

  handleState(event) {
    const key = event.target.getAttribute('data-id'),
      value = event.target.value;
    this.setState({
      wizardContext: { ...this.state.wizardContext, [key]: value }
    });
  }
  handleNested(event) {
    const key = event.target.getAttribute('data-id'),
      stage = event.target.getAttribute('data-step'),
      value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        [stage]: {
          ...prevState.wizardContext[stage],
          [key]: value
        }
      }
    }));
  }

  confirm(val) {
    this.props.onComplete(val);
  }

  next() {
    this.setState((prevState, props) => {
      return {
        compState: prevState.compState + 1,
        showPreviousBtn: true,
        showNextBtn:
          prevState.compState + 1 === props.steps.length ? false : true
      };
    });
  }

  previous() {
    if (this.state.compState > 1) {
      this.setState({
        compState: this.state.compState - 1,
        showNextBtn: true
      });
    }
    this.checkNavState(this.state.compState - 1);
  }

  render() {
    const Header = this.props.header;
    return (
      <div className="container">
        <Header />
        <ProgressBar
          step={this.state.compState}
          length={this.props.steps.length}
        />
        {React.cloneElement(this.props.steps[this.state.compState - 1], {
          onAction: this[
            this.props.steps[this.state.compState - 1].props.onAction
          ],
          wizardContext: this.state.wizardContext
        })}
        <Navigation
          showPrev={this.state.showPreviousBtn}
          showNext={this.state.showNextBtn}
          next={this.next}
          prev={this.previous}
          show={this.state.showNavigation}
        />
      </div>
    );
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};
