import React, { useState } from "react";

function LikeButton({ castId }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    fetch(`http://localhost:3000/casts/${castId}/like`, { method: "POST" })
      .then(() => {
        setLiked(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <button onClick={handleLike}>{liked ? "Liked" : "Like"}</button>;
}

export default LikeButton;
