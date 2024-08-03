import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ResourceHero from './ResourceHero';
import StickyHeader from './StickyHeader';
import ProductCard from './ProductCard';

function ResourcePage() {
  const location = useLocation();
  const initialResourceId = location.state?.clickedResourceId || 4;
  
  const [data, setData] = useState([]);
  const [selectedResourceId, setSelectedResourceId] = useState(initialResourceId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/resources');
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

  const filteredComponents = data.filter(item => item.resource_id === selectedResourceId);

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Header />
      <div className="Resourcepage">
        <ResourceHero />
        <StickyHeader onResourceClick={setSelectedResourceId} />
        <div className="InfoTitleResource">
          <h6>Take a look at resources What’s New Now</h6>
        </div>
      </div>
      <div className="center">
        

        {filteredComponents.length > 0 ?(filteredComponents.map((component) => (
          <ProductCard
            key={component.id}
            name={component.component_name}
            box_number={component.box_number}
            part_number={component.part_number}
            category={component.category}
            quantity={component.quantity}
            specification={component.specification}
            location={component.location}
            imgsrc={component.imgsrc}
          />
        ))):
        <div className='container'>
          <h2 style={{textAlign:"center"}}>There is No Products Available at the Selected Resources ! <br></br> Come Back Later :)</h2>
        </div>}
      </div>
      <Footer />
    </div>
  );
}

export default ResourcePage;
