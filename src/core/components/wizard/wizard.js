import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import ProgressBar from '../progressbar';
import {stepMapping} from '../constants';
import {validatorObj} from '../utils';

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreviousBtn: false,
      showNextBtn: true,
      showConfirm: false,
      compState: 1, //our starting step
      showNavigation: true,
      wizardContext: this.props.wizardContext,
      errorObj: {}
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleNested = this.handleNested.bind(this);
    this.confirm = this.confirm.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  checkNavState(next) {
    if (next < 2) {
      this.setState({
        showPreviousBtn: false
      });
    }
  }

  handleFilter(event) {
    const typeOfComponenent = event.target.getAttribute('data-step');
    if (typeOfComponenent === stepMapping.from || typeOfComponenent === stepMapping.to) {
      this.handleNested(event);
    } else if (typeOfComponenent === stepMapping.confirm) {
      this.props.onComplete(this.state.wizardContext)
    } else if(typeOfComponenent === stepMapping.weight || typeOfComponenent === stepMapping.shipping ) { //weight and shipping steps
      this.handleState(event);
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

  confirm(state) {
    this.props.onComplete(state);
  }

  next() {
    const {wizardContext} = this.state;
    this.setState({
      errorObj: {}
    });
    const currentComponent = Object.keys(validatorObj)[this.state.compState -1];
    if (validatorObj[currentComponent]) {
      const errors = validatorObj[currentComponent](wizardContext[currentComponent]);
      if (Object.keys(errors).length) {
        this.setState({
          errorObj: errors
        })
        return false;
      }
    }
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
    this.setState({
      errorObj: {}
    });
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
    const ActiveComponent = this.props.steps[this.state.compState - 1];
    return (
      <div className="container">
        <Header />
        <ProgressBar
          step={this.state.compState}
          length={this.props.steps.length}
        />
        <ActiveComponent onAction={this.handleFilter} wizardContext={this.state.wizardContext} />
        <Navigation
          showPrev={this.state.showPreviousBtn}
          showNext={this.state.showNextBtn}
          next={this.next}
          prev={this.previous}
          show={this.state.showNavigation}
        />
        {Object.keys(this.state.errorObj).map((key) => {
          return (
            <p> You have {key} error </p>
          )
        })}
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
