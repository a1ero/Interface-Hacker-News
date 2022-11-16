import React, { useEffect, useState } from 'react';
import { getStory } from '../services/api';
import { Button, Container } from 'react-bootstrap';
import { ArrowClockwise, ArrowLeft } from 'react-bootstrap-icons';
import { StorySingular } from './StorySingular';
import { useParams } from 'react-router';

export const StoryPage = ( ) => { 
  const { id } = useParams();

  const [story, setStory] = useState();

  useEffect(() => {
    getStory(id)
      .then((data) => {
        if (data && data.url) {
          setStory(data);
        }
      });
  }, [id]); // <-- fetch story when id changes

  function refreshPage() {
    window.location.reload();
};

  return (
    <Container data-id={id}>
      <Button style={{marginLeft: '15px', marginTop:'1%', marginBottom: '1%'}} variant="outline-info" href='/'><ArrowLeft/></Button>
      <Button onClick={refreshPage} variant="outline-info" style={{ marginLeft: '15px', marginTop:'1%', marginBottom: '1%' }}><ArrowClockwise/></Button>
      <br/>
      {story && <StorySingular story={story} />}
      <br/>
    </Container>
  );
};

export default StoryPage;