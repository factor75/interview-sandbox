const starAscii = '★';
const negativeStarAscii = '☆';
export const formatRatingAsStars = (ratingNumber) => {
  const numStars = Math.ceil(ratingNumber);
  return Array.from({ length: 5 }).map((_, i) => {
    if (i < numStars) {
      return starAscii
    }
    return negativeStarAscii;
  }).join('');
}
