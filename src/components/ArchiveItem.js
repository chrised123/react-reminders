import React from 'react';
import './../styles/ArchiveItem.css';

const ArchiveItem = ({ item, id, removeArchive }) => {
  return (
    <>
      <li className="clearfix">
        <div className="archive-text">{item?.title} - {item?.date}</div>
        <div className="remove-archive" onClick={removeArchive}>
          Remove archive
        </div>
      </li>
    </>
  );
};

export { ArchiveItem };
