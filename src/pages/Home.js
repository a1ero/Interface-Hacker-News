import React, { useEffect, useState } from 'react';
import { Story } from '../components/Story';
import { getStoryIds } from '../services/api';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const Home = () => {
  const {count} = useInfiniteScroll(); 
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);
  
  return storyIds.slice(0, count).map(storyId => (
    <div key={storyId}>
      <Story  storyId={storyId} />
  </div>
  ));
};

export default Home;