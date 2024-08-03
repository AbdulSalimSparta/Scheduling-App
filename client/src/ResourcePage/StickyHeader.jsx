import React, { useEffect, useState } from 'react';

function StickyHeader({ onResourceClick }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="stickyHeader scrollable-div " >
      {data.map((item) => (
        <div
          className="resourcebox"
          key={item.id}
          onClick={() => onResourceClick(item.id)}
        >
          <img src={item.imgsrc} alt={item.cardtitle} />
          <h6>{item.cardtitle}</h6>
        </div>
      ))}
    </div>
  );
}

export default StickyHeader;
