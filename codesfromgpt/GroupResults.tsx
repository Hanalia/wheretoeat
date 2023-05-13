import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { RestaurantCard } from './RestaurantCard';

export const GroupResults = () => {
  const { groupId } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch group document
      const group = await db.collection('groups').doc(groupId).get();
      const groupData = group.data();

      // Calculate most popular categories
      const categoryVotes = {};
      for (const categories of Object.values(groupData.selectedCategories)) {
        for (const category of categories) {
          if (categoryVotes[category]) {
            categoryVotes[category]++;
          } else {
            categoryVotes[category] = 1;
        }
    }
  }

  // Fetch restaurants with most popular categories
  const topCategories = Object.entries(categoryVotes)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([category]) => category);

  const restaurantData = await db.collection('restaurants')
    .where('category', 'in', topCategories)
    .get();

  setRestaurants(restaurantData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
};

fetchData();
}, [groupId]);

return (
<div>
  {restaurants.map(restaurant => (
    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  ))}
</div>
);
};
