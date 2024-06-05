import React, { useState, useEffect } from 'react';
import bossData from '../mock/bossData';

const Overlay = ({ onClose, position }) => {
  const [openRegions, setOpenRegions] = useState({});
  const [checkedBosses, setCheckedBosses] = useState({});
  const [totalCheckedBosses, setTotalCheckedBosses] = useState(0);

  useEffect(() => {
    const savedOpenRegions = JSON.parse(localStorage.getItem('openRegions')) || {};
    setOpenRegions(savedOpenRegions);
    const savedCheckedBosses = JSON.parse(localStorage.getItem('checkedBosses')) || {};
    setCheckedBosses(savedCheckedBosses);
  }, []);

  useEffect(() => {
    let totalCount = 0;
    for (const region in checkedBosses) {
      totalCount += Object.keys(checkedBosses[region]).length;
    }
    setTotalCheckedBosses(totalCount);
  }, [checkedBosses]);

  const toggleRegion = (region) => {
    setOpenRegions((prevOpenRegions) => ({
      ...prevOpenRegions,
      [region]: !prevOpenRegions[region],
    }));
  };

  const handleCheckboxChange = (region, boss) => {
    setCheckedBosses((prevCheckedBosses) => {
      const regionCheckedBosses = { ...prevCheckedBosses[region] };
      if (regionCheckedBosses[boss]) {
        delete regionCheckedBosses[boss];
      } else {
        regionCheckedBosses[boss] = true;
      }
      const updatedCheckedBosses = { ...prevCheckedBosses, [region]: regionCheckedBosses };
      localStorage.setItem('checkedBosses', JSON.stringify(updatedCheckedBosses));
      return updatedCheckedBosses;
    });
  };

  return (
    <div className="overlay">
      <div className="overlay-content" style={{ top: `${position.top}px`, left: `${position.left}px` }}>
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Felled: {totalCheckedBosses}</h2>
        {Object.keys(bossData).map(region => (
          <div className="region" key={region}>
            <h3 onClick={() => toggleRegion(region)}>
              {region} {openRegions[region] ? '▲' : '▼'}
            </h3>
            {openRegions[region] && (
              <ul>
                {bossData[region].map((boss) => (
                  <li key={boss}>
                    <input
                      type="checkbox"
                      checked={!!checkedBosses[region]?.[boss]}
                      onChange={() => handleCheckboxChange(region, boss)}
                    />{' '}
                    {boss}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
