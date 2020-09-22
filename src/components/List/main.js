import React from 'react';
import ListItem from './ListItem';

import data from './staticData.json';

const List = () => {
  return (
    <div className='List'>
      {data.menu.map(menuItem => (
        <ListItem {...menuItem} key={`menu-item-${menuItem.id}`} />
      ))}
    </div>
  )
}
export default List;