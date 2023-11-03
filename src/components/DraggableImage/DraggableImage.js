// DraggableImage.js

import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './DraggableImage.css'


const ItemType = 'IMAGE';
const DraggableImage = ({ imgPath, index ,onDrop}) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (draggedItem) => onDrop(draggedItem.index, index),
  });

  return (
    <>
         <img  ref={(node) => ref(drop(node))} className={`grid-item${index === 0 ? ' wide' : ''}`} src={imgPath} alt={`pic ${index + 1}`} />
    </>
  
  );
};

export default DraggableImage;
