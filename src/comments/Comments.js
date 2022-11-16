import React from 'react';
import { Comment } from './Comment';
import { Container } from 'react-bootstrap';


export const Comments = ({ commentIds, root }) => {
    
  return (
    <Container>
      {root && (
        <Container>
          Comments:
        </Container>
      )}
      {commentIds.slice(0, 5).map(
        (id, i) =>
          id && (
            <div key={id}>
              <Comment commentId={id} />
            </div>
          )
      )}
    </Container>
  );
};
