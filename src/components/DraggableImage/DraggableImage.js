// DraggableImage.js

import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './DraggableImage.css'


const ItemType = 'IMAGE';
const DraggableImage = ({ imgPath, index ,onDrop, onCheckboxClick}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);


  const [{ isDragging }, ref] = useDrag({
    type: ItemType,
    item: { index },
  });
  
  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (draggedItem) => onDrop(draggedItem.index, index),
  });

  const handleCheckboxClick = () => {
    setIsSelected(!isSelected); // Toggle the selected state
    onCheckboxClick(index, !isSelected); // Pass the index and new selected state to the parent
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      ref={(node) => ref(drop(node))}
      className={`grid-item${index === 0 ? ' wide' : ''}`}
    >
      <img src={imgPath} alt={`pic ${index + 1} ${isDragging ? 'dragging' : ''}`} />

      {(isHovered || isSelected) &&(
        <div className="checkbox-container">
          <input 
          type="checkbox" 
          checked={isSelected} // Set the checked state based on the isSelected state
          onChange={handleCheckboxClick} // Handle checkbox click event
          />
        </div>
      )}
    </div>
          
          );
};

export default DraggableImage;
