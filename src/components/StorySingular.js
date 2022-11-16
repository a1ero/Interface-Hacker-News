/* eslint-disable react-hooks/exhaustive-deps */
import React, {  } from 'react';
import { Card, Container, Nav } from 'react-bootstrap';
import { Comments } from '../comments/Comments';
import { mapTime } from '../mappers/mapTime';

export const StorySingular = ({ story }) => {
  const { kids, id, url } = story;
    
  return story && url ? (
    <>
      <Container data-id={id}>
        <Card style={{paddingLeft: "1%", paddingTop: "1%"}}>
            <Card.Title style={{paddingLeft: "1%"}}>{story.title}</Card.Title>
            <Nav.Link href={story.url}>{url}</Nav.Link>
            <br/>
            <Card.Text style={{color: 'black', fontStyle: 'italic',paddingLeft: "1%", fontSize: '14px'}}>Author: {story.by}</Card.Text>
            <Card.Text style={{color: 'black', fontStyle: 'italic',paddingLeft: "1%", fontSize: '14px'}}>Posted: {mapTime(story.time)}</Card.Text>
            <Card.Text style={{color: 'black', fontStyle: 'italic',paddingLeft: "1%", fontSize: '14px'}}>Comments: {story.descendants}</Card.Text>
            <Card.Text>{kids && <Comments commentIds={kids} root />}</Card.Text>
        </Card>
    </Container>
    </> 
  ): null;
};

export default StorySingular;
