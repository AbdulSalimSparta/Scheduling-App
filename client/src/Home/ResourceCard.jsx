import React, { useState, useEffect } from 'react';
import CardResource from './CardResource';

function ResourceCard({ onResourceClick }) {
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
    <div className="center">
      {data.map((resource) => (
        <CardResource
          key={resource.id}
          location={resource.location}
          cardtitle={resource.cardtitle}
          imgsrc={resource.imgsrc}
          onClicked={() => onResourceClick(resource.id)}
        />
      ))}
    </div>
  );
}

export default ResourceCard;
