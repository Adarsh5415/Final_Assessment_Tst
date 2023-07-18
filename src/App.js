import React, { useState, useEffect } from 'react';
import Logo from './component/Logo';
import Navbar from './component/Navbar';
import PersonDetails from './component/PersonDetails';
import PictureForm from './component/PictureForm';
import Footer from './component/Footer';

const App = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        setPerson(responseData);
      } else {
        console.log('Error:', xhr.status);
      }
    };
    xhr.onerror = () => {
      console.log('Request failed');
    };
    xhr.send();

    return () => {
      // Cleanup the request if the component is unmounted
      xhr.abort();
    };
  }, []);

  const handlePictureSubmit = (pictureLink) => {
    // Handle the submitted picture link here
    console.log('Submitted picture link:', pictureLink);
  }

  return (
    <div className="app">
      <Logo />
      <Navbar />
      {person && (
        <PersonDetails
          name={person.name}
          email={person.email}
          phone={person.phone}
        />
      )}
      <PictureForm onPictureSubmit={handlePictureSubmit} />
      <Footer />
    </div>
  );
}

export default App;
