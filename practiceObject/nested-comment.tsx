"use client";

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const CommentBox = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const CommentInput = styled.input`
  margin-top: 10px;
  padding: 5px;
  width: calc(100% - 12px);
`;

const Button = styled.button`
  margin-top: 10px;
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Comment = ({ comment }) => {
    const [replies, setReplies] = useState(comment.replies);
    const [replyText, setReplyText] = useState('');
    const [likes, setLikes] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment.text);

    const handleAddReply = () => {
        setReplies([...replies, { id: Date.now(), text: replyText, replies: [] }]);
        setReplyText('');
    };

    const handleLike = () => setLikes(likes + 1);

    const handleEdit = () => setIsEditing(true);

    const handleSaveEdit = () => {
        comment.text = editText;
        setIsEditing(false);
    };

    return (
        <CommentBox style={{ marginLeft: '20px' }}>
            {isEditing ? (
                <div>
                    <CommentInput
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <Button onClick={handleSaveEdit}>Save</Button>
                </div>
            ) : (
                <p>{comment.text}</p>
            )}
            <Button onClick={handleLike}>Like ({likes})</Button>
            <Button onClick={handleEdit}>Edit</Button>
            <div>
                {replies.map((reply) => (
                    <Comment key={reply.id} comment={reply} />
                ))}
            </div>
            <div>
                <CommentInput
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                />
                <Button onClick={handleAddReply}>Reply</Button>
            </div>
        </CommentBox>
    );
};

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    const handleAddComment = () => {
        setComments([...comments, { id: Date.now(), text: commentText, replies: [] }]);
        setCommentText('');
    };

    return (
        <Container>
            <h1>Comment Section</h1>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
            <div>
                <CommentInput
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <Button onClick={handleAddComment}>Add Comment</Button>
            </div>
        </Container>
    );
};

export default CommentSection;
