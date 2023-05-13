import React, { useState, useEffect } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { db } from '../firebase';

export const Results = () => {
  const [restaurants, setRestaurants] = useState([]);
  const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories'));

  useEffect(() => {
    // Fetch restaurants from Firebase
    const fetchData = async () => {
      const data = await db.collection('restaurants').where('category', 'in', selectedCategories).get();
      setRestaurants(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, [selectedCategories]);

  return (
    <div>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
