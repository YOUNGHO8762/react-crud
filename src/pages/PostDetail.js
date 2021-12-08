import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useUserContext } from '../contexts/Context';
import Label from '../components/Post/Label';
import StyledButton from '../components/CommonStyled/StyledButton';
import { FORUM_API } from '../config';

const PostDetail = ({ match }) => {
  const [post, setPost] = useState({});
  const { accessToken } = useUserContext();
  const { id } = match.params;
  const history = useHistory();

  useEffect(() => {
    accessToken ? LoadForumData() : handleLoginCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LoadForumData = async () => {
    const response = await axios.get(`${FORUM_API}/${id}`);
    setPost(response.data);
  };

  const handleLikeClick = (id) => {
    setPost({ ...post, isLiked: !post.isLiked });
    axios.put(`${FORUM_API}/${id}`, {
      ...post,
      isLiked: !post.isLiked,
    });
  };

  const handleLoginCheck = () => {
    alert('로그인 먼저 해주세요');
    handleMoveClick('/');
  };

  const handleDeleteClick = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      axios.delete(`${FORUM_API}/${id}`);
      handleMoveClick('/forum');
    }
  };

  const handleBackClick = () => {
    handleMoveClick('/forum');
  };

  const handleModifyClick = () => {
    handleMoveClick(`/modify/${id}`);
  };

  const handleMoveClick = (page) => {
    history.push(page);
  };

  return (
    <PostDetailContainer>
      <ButtonWrapper>
        <StyledButton
          onClick={handleBackClick}
          backgroundColor="#F4F6FF"
          color="#5D82FF"
        >
          &#60; 이전으로 돌아가기
        </StyledButton>
      </ButtonWrapper>
      <PostDetailWrapper>
        <PostContentTop>
          <PostTitle>{post.title}</PostTitle>
          <div>
            {post.tag && <Label name={post.tag.name} color={post.tag.color} />}
          </div>
        </PostContentTop>
        <PostContent>{post.content}</PostContent>
      </PostDetailWrapper>
      <ButtonWrapper>
        <StyledButton
          onClick={() => handleDeleteClick()}
          backgroundColor="red"
          color="white"
        >
          삭제
        </StyledButton>
        <StyledButton
          onClick={() => handleModifyClick()}
          backgroundColor="#F39B0E"
          color="white"
        >
          수정
        </StyledButton>
        <IsLiked
          isLiked={post.isLiked}
          onClick={() => handleLikeClick(post.id)}
        />
      </ButtonWrapper>
    </PostDetailContainer>
  );
};

export default PostDetail;

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

const PostDetailWrapper = styled.div`
  padding: 20px 0px;
  width: 1024px;
`;

const IsLiked = styled.img.attrs((props) => ({
  src: props.isLiked ? '/images/heart.png' : '/images/empty_heart.png',
}))`
  width: 40px;
  margin-left: 20px;
  cursor: pointer;
`;

const PostContentTop = styled.div`
  padding: 20px 0;
  width: 1024px;
`;

const PostTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #dddddd;
  padding: 20px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
`;
