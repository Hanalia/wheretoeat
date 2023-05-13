import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

export const RestaurantCard = ({ restaurant }) => {
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    // Fetch votes from Firebase
    const fetchData = async () => {
      const data = await db.collection('votes').doc(restaurant.id).get();
      setVotes(data.data().votes);
    };

    fetchData();
  }, [restaurant.id]);

  const handleUpvote = async () => {
    await db.collection('votes').doc(restaurant.id).update({
      votes: votes + 1
    });
    setVotes(votes + 1);
  };

  const handleDownvote = async () => {
    await db.collection('votes').doc(restaurant.id).update({
      votes: votes - 1
    });
    setVotes(votes - 1);
  };

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.location}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
      <p>Votes: {votes}</p>
    </div>
  );
};
