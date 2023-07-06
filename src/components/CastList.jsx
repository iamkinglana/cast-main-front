import React, { useEffect, useState } from 'react';
import '../App.css'

function CastList() {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/casts', {
      // mode: 'cors',
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    })
      .then(response => response.json())
      .then(data => {
        setCasts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {casts.map(cast => (
        <div key={cast.id} className="cast-container">
          <p>{cast.content}</p>
          <p className="author">Author: {cast.author}</p>
          <p className="likes">Likes: {cast.likes}</p>
          <p className="comments">Comments: {cast.comments}</p>
        </div>
      ))}
    </div>
  );
}

export default CastList;
