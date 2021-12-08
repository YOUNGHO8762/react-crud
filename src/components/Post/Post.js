import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Label from './Label';

const Post = ({ post, onLikeClick }) => {
  const [limit, setLimit] = useState(140);

  const history = useHistory();

  const toggleEllipsis = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  const onClickMore = (str) => () => {
    setLimit(str.length);
  };

  const handleClickPost = (id) => {
    history.push(`/forum/${id}`);
  };

  return (
    <PostWrapper>
      <PostAside>
        <IsLiked isLiked={post.isLiked} onClick={() => onLikeClick(post.id)} />
      </PostAside>
      <PostMain>
        <PostTitle onClick={() => handleClickPost(post.id)}>
          {post.title}
        </PostTitle>
        <PostContent>
          <div onClick={() => handleClickPost(post.id)}>
            {toggleEllipsis(post.content, limit).string}
          </div>
          {toggleEllipsis(post.content, limit).isShowMore && (
            <SeeMore onClick={onClickMore(post.content)}>...더 보기</SeeMore>
          )}
        </PostContent>
        <div>
          <Label name={post.tag.name} color={post.tag.color} />
        </div>
      </PostMain>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 200px;
  margin: 10px 0;
  border-top: 1px solid #dddddd;
`;

const PostAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const PostMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  padding: 40px 0;
`;

const PostTitle = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
  color: gray;
  cursor: pointer;
`;

const SeeMore = styled.span`
  color: gray;
  width: 70px;
`;

const IsLiked = styled.img.attrs((props) => ({
  src: props.isLiked ? '/images/heart.png' : '/images/empty_heart.png',
}))`
  width: 40px;
`;
