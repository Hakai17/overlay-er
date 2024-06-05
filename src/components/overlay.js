import React from 'react';

const Overlay = ({ onClose, position }) => {
  return (
    <div className="overlay">
      <div className="overlay-content" style={{ top: `${position.top}px`, left: `${position.left}px` }}>
        <button className="close-btn" onClick={onClose}>Fechar Overlay</button>
        <h2>Total Derrotados: 0</h2>
        <div className="region">
          <h3>Limgrave</h3>
          <ul>
            <li><input type="checkbox" /> Margit, the Fell Omen</li>
            <li><input type="checkbox" /> Beastman of Farum Azula</li>
            <li><input type="checkbox" /> Leonine Misbegotten</li>
          </ul>
        </div>
        <div className="region">
          <h3>Liurnia of the Lakes</h3>
          <ul>
            <li><input type="checkbox" /> Royal Knight Loretta</li>
            <li><input type="checkbox" /> Red Wolf of Radagon</li>
            <li><input type="checkbox" /> Rennala, Queen of the Full Moon</li>
          </ul>
        </div>
        <div className="region">
          <h3>Caelid</h3>
          <ul>
            <li><input type="checkbox" /> Starscourge Radahn</li>
            <li><input type="checkbox" /> Commander O'Neil</li>
            <li><input type="checkbox" /> Elder Dragon Greyoll</li>
          </ul>
        </div>
        <div className="region">
          <h3>Altus Plateau</h3>
          <ul>
            <li><input type="checkbox" /> Godfrey, First Elden Lord</li>
            <li><input type="checkbox" /> Morgott, the Omen King</li>
            <li><input type="checkbox" /> Fire Giant</li>
          </ul>
        </div>
        <div className="region">
          <h3>Mountaintops of the Giants</h3>
          <ul>
            <li><input type="checkbox" /> Borealis, the Freezing Fog</li>
            <li><input type="checkbox" /> Commander Niall</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
