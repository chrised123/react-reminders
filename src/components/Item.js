import React, { Fragment } from 'react';
import './../styles/Item.css';

const Item = (props) => {
  const deleteItem = () => {
    props.delete(props.index);
  };

  return (
    <Fragment>
      <li className="clearfix">
        <div className="reminder-text">{props.item}</div>
        <div className="remove-reminder" onClick={deleteItem}>
          Delete
        </div>
      </li>
    </Fragment>
  );
};

export default Item;
