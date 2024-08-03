import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ResourceCard from './ResourceCard';

function Home() {
  const navigate = useNavigate();

  const handleResourceClick = (id) => {
    navigate('/resource', { state: { clickedResourceId: id } });
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>   
      <Header />
      <div className="HeroBg"></div>
      <div className="HeroTxt">
        <h6>Fair Access to CED Makers Lab Resources</h6>
        <h1 className="HeroH1">CED Makers Lab <br/> Components</h1>
      </div>
      <div>
        <ResourceCard onResourceClick={handleResourceClick} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
