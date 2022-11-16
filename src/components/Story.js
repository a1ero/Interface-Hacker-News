/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { getStory } from '../services/api';
import { Card, Container } from 'react-bootstrap'
import { mapTime } from '../mappers/mapTime';
import { Link } from 'react-router-dom';

export const Story = ({storyId}) => {
    const[story, setStory] = useState({});
    const {id} = story;

    useEffect(() => {
        const timer = setTimeout(() => {
          window.location.reload();
        }, 60000);
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        getStory(storyId).then((data) => data.url && setStory(data))
    }, []);

    return story && story.url ? (   
        <Container data-id={id} fluid="xl" style={{marginTop: "1%", marginBottom: "1%"}}>
            <Container>
                <Link to={`/storyPage/${id}`}
                    style={{ textDecoration: 'none' }}>
                    <Card style={{ paddingLeft: "1%", paddingTop: "1%", paddingBottom: "1%"}}>
                        <Card.Title>{story.title}</Card.Title>
                        <br/>
                        <Card.Text style={{color: 'black', fontStyle: 'italic', fontSize: '15px'}}>Author: {story.by}</Card.Text>
                        <Card.Text style={{color: 'black', fontStyle: 'italic', fontSize: '15px'}}>Posted: {mapTime(story.time)}</Card.Text>
                        <Card.Text style={{color: 'black', fontStyle: 'italic', fontSize: '15px'}}>Rating: {story.score}</Card.Text>
                    </Card>
                </Link>
            </Container>
        </Container>
    ):null;
    
};
export default Story;