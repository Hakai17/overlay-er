import React, { useState } from 'react';
import Overlay from './components/overlay';
import './styles.css';

const App = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [position, setPosition] = useState({ top: 10, left: 10 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    const pos = e.target.getBoundingClientRect();
    setDragging(true);
    setRel({
      x: e.pageX - pos.left,
      y: e.pageY - pos.top
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      top: e.pageY - rel.y,
      left: e.pageX - rel.x
    });
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div id="root" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      {!isOverlayOpen && (
        <button
          id="open-overlay-btn"
          onMouseDown={handleMouseDown}
          onClick={() => setIsOverlayOpen(true)}
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          Open
        </button>
      )}
      {isOverlayOpen && <Overlay onClose={() => setIsOverlayOpen(false)} position={position} />}
    </div>
  );
};

export default App;
