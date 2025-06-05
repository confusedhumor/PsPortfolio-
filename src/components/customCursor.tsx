import React, { useState } from 'react';

interface HoverDescriptionProps {
  description: string;
  children: React.ReactNode;
  backgroundColor:string
}

const HoverDescription: React.FC<HoverDescriptionProps> = ({ description, children, backgroundColor }) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHovered(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {hovered && (
        <div
          style={{
            position: 'fixed',
            top: position.y + 20 ,
            left: position.x + 20 ,
            backgroundColor: backgroundColor,
            border: '1px solid black',
            padding: '5px',
            paddingRight:'15px',
            paddingLeft:'15px',
            borderRadius: '25px',
            zIndex: 100,
            pointerEvents: 'none',
          }}
          className='hidden sm:block'
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default HoverDescription;
