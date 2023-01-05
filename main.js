function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case 'China':
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Australia':
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }
  // Change code above this line
  return message;
}
