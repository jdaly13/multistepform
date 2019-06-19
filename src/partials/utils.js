import {stepMapping} from './constants';
import isPostalCode from 'validator/lib/isPostalCode';
const {from, to, weight, shipping} = stepMapping;
export function getshippingOption(option) {
    return (parseInt(option) === 1) ? "Ground" : "Express"
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
    console.log(obj);
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
  if (!val) {
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
