import React from 'react';
import './column.css';

const Column = ({ list, setUser }) => {

  const handleClick = (item) => {
    setUser({
      name: item.name,
      userId: item.id,
    });
  };

  return (
    <div>
      <ul className="column-list">
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => handleClick(item)}>
              <h3>{item.name}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Column;
