import React ,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LogoutButton from './LogoutButton';

const Header = () => {
  const photosrc ="https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png";
  const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user');
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
    <header className="p-2 border-bottom">
      <div className="headcontainer">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="http://auced.com/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <img className="bi me-2" src="../images/cedfavicon.png" width="40" height="32" alt="CED" />
          </a>
          <h5 className='text-dark pe-3 pt-1'>CED!</h5>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link to="/resource" className="nav-link px-2 link-dark">Resources</Link></li>
            <li><Link to="/cart" className="nav-link px-2 link-dark">My Cart</Link></li>
            <li><Link to="/dashboard" className="nav-link px-2 link-dark">Dashboard</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="dropdown text-end">
            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={ data.profileimg || photosrc }  alt="User Avatar" width="32" height="32" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><LogoutButton /></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
