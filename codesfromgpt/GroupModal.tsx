import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../firebase';

export const GroupModal = ({ onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [nickname, setNickname] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const history = useHistory();
  const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories'));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const groupId = `${Date.now()}-${Math.random()}`;

    await db.collection('groups').doc(groupId).set({
      groupName,
      nickname,
      numPeople,
      selectedCategories: {
        [nickname]: selectedCategories,
      },
    });

    onClose();
    history.push(`/group/${groupId}`);
  };

  return (
    <div>
      <h2>Name Your Group</h2>
      <form onSubmit={handleSubmit}>
        <input value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="Group Name" required />
        <input value={nickname} onChange={e => setNickname(e.target.value)} placeholder="Your Nickname" required />
        <input value={numPeople} onChange={e => setNumPeople(e.target.value)} placeholder="Number of People" required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};
