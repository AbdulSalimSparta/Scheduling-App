import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from "../Header";

function Profile() {
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState(null);
  const photosrc ="https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png";

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
      console.log(URL.createObjectURL(e.target.files[0]));
    }
    
  };

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
    <>
      <Header />
      <div className="bodyprofile">
        <div className="subbodyprofile">
          <h1 className="userprofiletxt">User Profile</h1>
          <div className="bootstrapprofile rounded bg-white">
            <div className="profileBox">
              <img 
                src={ data.profileimg || photosrc } 
                className="ProfileImage" 
                alt="Profile" 
              />
              <label htmlFor="profile-image-upload" id="profile-image-upload-label">Upload Photo</label>
              <input 
                id="profile-image-upload" 
                className="hidden" 
                type="file" 
                onChange={handlePhotoChange} 
              />
              <div className="ProfileDetails">
                <p>Name : {data.username}</p>
                <p>Email : {data.email}</p>
                <p>AnnaUniv Student : {data.annaunivstudent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
