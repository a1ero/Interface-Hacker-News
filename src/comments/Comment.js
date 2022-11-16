/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { getComment } from '../services/api';
import { mapTime } from '../mappers/mapTime';
import { Comments } from './Comments';

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const { kids } = comment;

  useEffect(() => {
    getComment(commentId).then((data) => data && data.type && setComment(data));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 60000);
    return () => clearTimeout(timer);
    }, []);

    
  return (
    <Container>
      {comment && !comment.deleted && (
        <Container>
          <Card style={{ paddingLeft: "1%", paddingTop: "1%", paddingBottom: "1%", backgroundColor: '#FFF8DC', marginBottom: '15px'}}>
                    <Card.Text style={{color: 'black', fontStyle: 'italic'}}>Author: {comment.by}</Card.Text>
                    <Card.Text style={{color: 'black', paddingLeft: '2%', paddingRight: '2%'}}>{comment.text}</Card.Text>
                    <Card.Text style={{color: 'black', fontStyle: 'italic'}}>Posted: {mapTime(comment.time)}</Card.Text>
                </Card>
          {kids && <Comments commentIds={kids} />}
          <br/>
        </Container>
      )}
    </Container>
  );
};

export default Comment;
