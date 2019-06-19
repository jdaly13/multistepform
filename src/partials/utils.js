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
