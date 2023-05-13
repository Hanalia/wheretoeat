import React from 'react';
import { useHistory } from 'react-router-dom';
import { GroupModal } from './GroupModal';

export const Home = () => {
  const history = useHistory();
  const [groupModalOpen, setGroupModalOpen] = React.useState(false);

  const handleEatAlone = () => {
    history.push('/categories');
  };

  const handleEatTogether = () => {
    setGroupModalOpen(true);
  };

  const handleModalClose = () => {
    setGroupModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleEatAlone}>Eat Alone</button>
      <button onClick={handleEatTogether}>Eat Together</button>
      {groupModalOpen && <GroupModal onClose={handleModalClose} />}
    </div>
  );
};
