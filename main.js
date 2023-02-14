const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((curElement, nextElement) =>
  curElement.author.localeCompare(nextElement.author)
);

const sortedByReversedAuthorName = [...books].sort((curElement, nextElement) =>
  nextElement.author.localeCompare(curElement.author)
);

const sortedByAscendingRating = [...books].sort(
  (curElement, nextElement) => curElement.rating - nextElement.rating
);

const sortedByDescentingRating = [...books].sort(
  (curElement, nextElement) => nextElement.rating - curElement.rating
);

// Change code below this line
const sortByAscendingBalance = users =>
  [...users].sort((curElement, nextElement) => curElement.balance - nextElement.balance);
// Change code above this line

// Change code below this line
const sortByDescendingFriendCount = users =>
  [...users].sort(
    (curElement, nextElement) => nextElement.friends.length - curElement.friends.length
  );
// Change code above this line

// Change code below this line
const sortByName = users =>
  [...users].sort((curElement, nextElement) => curElement.name.localeCompare(nextElement.name));
// Change code above this line
