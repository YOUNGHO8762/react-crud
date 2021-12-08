import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const PostList = ({ postList }) => {
  return (
    <PostListWrapper>
      <PostListContent>
        {postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </PostListContent>
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PostListContent = styled.div`
  width: 1024px;
`;
