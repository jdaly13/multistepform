import React from 'react';
import StepOne from './fromstep';
import StepTwo from './tostep';
import StepThree from './weightstep';
import StepFour from './shippingstep';
import Confirm from './confirmstep';

const steps = [
  <StepOne wizardContext={'from'} onAction={'handleNested'} />,
  <StepTwo wizardContext={'to'} onAction={'handleNested'} />,
  <StepThree wizardContext={'weight'} onAction={'handleState'} />,
  <StepFour wizardContext={'shippingOption'} onAction={'handleState'} />,
  <Confirm wizardContext={'wizardContext'} onAction={'confirm'} />
];
/*const steps = [
  StepOne, StepTwo, StepThree, StepFour, Confirm
]*/

export default steps;
