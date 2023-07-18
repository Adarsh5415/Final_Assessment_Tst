import React, { useState, useEffect } from 'react';

function PersonDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Person Details</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonDetails;
