import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { db } from '../firebase'; 

export const FoodCategories = () => {
  const { groupId } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // ... existing code to fetch categories
  }, []);

  const handleSubmit = async () => {
    if (groupId) {
      // Add selected categories to group document
      const groupRef = db.collection('groups').doc(groupId);
      const group = await groupRef.get();
      const groupData = group.data();
      const nickname = groupData.nickname;  // This would come from user input in a real app

      await groupRef.update({
        selectedCategories: {
          ...groupData.selectedCategories,
          [nickname]: selectedCategories,
        },
      });

      history.push(`/group/${groupId}/results`);
    } else {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    history.push('/loading');
  };

  return (
    <div>
      {categories.map(category => (
        <div key={category.id} onClick={() => handleCategorySelect(category.id)}>
          {category.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Pick me food</button>
    </div>
  );
};
