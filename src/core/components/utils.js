import isPostalCode from 'validator/lib/isPostalCode';
import {stepMapping} from './constants';
const {from, to, weight} = stepMapping;

export function getshippingOption(option) {
    return (option === 1) ? "Ground" : "Express"
}

export function getShippingRate(weight, shippingOption) {
    const shippingRate = .4,
          expressRate = 1.5,
          shipWeight = parseFloat(weight),
          option = parseFloat(shippingOption),
          shippingCharge = option === 1 ? 1 : expressRate;
    return ((shipWeight * shippingRate) * shippingCharge).toFixed(2);
}

function checkFromTo(obj) {
    const errorObj = {};
    if (!obj.name) {
      errorObj.firstName = true;
    }
    if (!obj.street) {
      errorObj.street = true;
    }
    if (!obj.city) {
      errorObj.city = true;
    }
    if (obj.state.length !== 2) {
      errorObj.state = true;
    }
    if (!isPostalCode(obj.zip, 'US')) {
      errorObj.zip = true;
    }

    return errorObj;
}

function checkWeight(val) {
  const errorObj = {};
  if (!parseInt(val, 10)) {
    errorObj.weight = true;
  }
  return errorObj;
}

/* must be in same order as shipping object or we could do array loop but this is quicker */
export const validatorObj = {
  [from] : checkFromTo,
  [to] : checkFromTo,
  [weight]: checkWeight
}
