import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-3 my-4">
      <h4 className="text-center text-light pt-3 mt-3">Anna University, CED</h4>
      <p className="text-center text-light pb-3 mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque ipsum cum mollitia quisquam quibusdam numquam labore pariatur!
        <br />
        Fugiat consequuntur possimus eaque iure dolore quod ad magnam ex iusto odio.
      </p>
      <ul className="nav justify-content-center pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
        <li className="nav-item"><Link to="/resource" className="nav-link px-2 text-light">Resources</Link></li>
        <li className="nav-item"><Link to="/cart" className="nav-link px-2 text-light">My Cart</Link></li>
        <li className="nav-item"><Link to="/dashboard" className="nav-link px-2 text-light">Dashboard</Link></li>
        <li className="nav-item"><a href="http://auced.com/" className="nav-link px-2 text-light">About</a></li>
      </ul>
      <p className="text-center text-light">© {new Date().getFullYear()} Center for Entrepreneurship Development, Inc</p>
    </footer>
  );
};

export default Footer;
