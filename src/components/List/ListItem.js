import React from 'react';
import { formatRatingAsStars } from '../../lib/helpers';

const ListItem = ({ rating, title }) => {
  return (
    <li className='List-item'>
      {title}
      <span className='List-item-rating'>
        Average rating:
        <span aria-label={rating}>
          {formatRatingAsStars(rating)}
        </span>
      </span>
    </li>
  )
}
export default ListItem;
