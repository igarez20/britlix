// Change code below this line
const getFriends = users => {
  const allFriends = users.flatMap(user => user.friends);
  const uniqueFriends = allFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
  return uniqueFriends;
};

// Change code above this line
