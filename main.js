function checkForSpam(message) {
  let result;
  // Change code below this line
  if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}
