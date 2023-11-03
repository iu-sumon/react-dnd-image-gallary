import React, { useState } from 'react';
import './Gallary.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableImage from '../DraggableImage/DraggableImage';
import img1 from '../assets/images/image-1.webp'
import img2 from '../assets/images/image-2.webp'
import img3 from '../assets/images/image-3.webp'
import img4 from '../assets/images/image-4.webp'
import img5 from '../assets/images/image-5.webp'
import img6 from '../assets/images/image-6.webp'
import img7 from '../assets/images/image-7.webp'
import img8 from '../assets/images/image-8.webp'
import img9 from '../assets/images/image-9.webp'
import img10 from '../assets/images/image-10.jpeg'
import img11 from '../assets/images/image-11.jpeg'

const imagePaths = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11
];

const Gallary = () => {
    const [imageOrder, setImageOrder] = useState(imagePaths);

    const handleDrop = (fromIndex, toIndex) => {
      const updatedOrder = [...imageOrder];
      const [movedImage] = updatedOrder.splice(fromIndex, 1);
      updatedOrder.splice(toIndex, 0, movedImage);
      setImageOrder(updatedOrder);
    };
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="image-grid">
        {imageOrder.map((imgPath, index) => (
          <DraggableImage key={index} imgPath={imgPath} index={index} onDrop={handleDrop} ></DraggableImage>
        ))}
      </div>
    </DndProvider>
  );
};

export default Gallary;