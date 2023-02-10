const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce(
  (avarage, player) => avarage + player.playtime / player.gamesPlayed,
  0
);

// Change code below this line
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
// Change code above this line

// Change code below this line
const getTotalFriendCount = users => users.reduce((count, user) => count + user.friends.length, 0);
// Change code above this line
