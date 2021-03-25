import React from 'react';
import './../styles/Archives.css';
import { ArchiveItem } from './ArchiveItem';

// Always use destructuring
const Archives = ({ deleteArchive, removeArchive, list }) => {
  return (
    <div className="archives-list">
      <h4>Archives</h4>
      <ul>
        {list.map((item, index) => (
          // Always use implicit return, which is cool :)
          <ArchiveItem
            item={item}
            key={index}
            removeArchive={removeArchive(index)}
          />
        ))}
      </ul>
    </div>
  );
};

// Better to explicitly mention what is returning, which will be helpful when you return more things from a component
export { Archives };
