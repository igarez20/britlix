const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
let totalPrice = 0;

totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

console.log(message);
