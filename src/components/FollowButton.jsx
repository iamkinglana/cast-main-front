import React, { useState } from 'react';

function FollowButton({ userId }) {
  const [followed, setFollowed] = useState(false);

  const handleFollow = () => {
    fetch(`http://localhost:3000/users/${userId}/follow`, { method: 'POST' })
      .then(() => {
        setFollowed(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <button onClick={handleFollow}>
      {followed ? 'Following' : 'Follow'}
    </button>
  );
}

export default FollowButton;
