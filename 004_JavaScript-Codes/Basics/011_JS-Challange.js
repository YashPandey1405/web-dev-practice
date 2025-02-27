let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let movieAverageRating = movieRatings.map((item) => {
  let length = item.ratings.length;
  let sum = item.ratings.reduce((acc, curr) => acc + curr, 0);
  let average = sum / length;
  return { title: item.title, ratings: average.toFixed(2) };
});

console.log(movieAverageRating);
