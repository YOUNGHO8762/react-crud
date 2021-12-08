import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useUserContext } from '../contexts/Context';
import StyledInput from '../components/CommonStyled/StyledInput';
import StyledSelect from '../components/CommonStyled/StyledSelect';
import StyledTextArea from '../components/CommonStyled/StyledTextArea';
import StyledButton from '../components/CommonStyled/StyledButton';
import { FORUM_API } from '../config';

const PostWrite = ({ match }) => {
  const [postValues, setPostValues] = useState({
    title: '',
    content: '',
  });

  const [tag, setTag] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [mode, setMode] = useState('write');

  const { accessToken } = useUserContext();
  const { id } = match.params;
  const history = useHistory();

  useEffect(() => {
    !accessToken && handleLoginCheck();
    if (match.url.includes('modify')) {
      getPostData();
      setMode('modify');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tags = [
    { id: 0, value: '', text: '' },
    { id: 1, value: 'bug', text: 'bug' },
    { id: 2, value: 'tip', text: 'tip' },
    { id: 3, value: 'general', text: 'general' },
    { id: 4, value: 'learn', text: 'learn' },
  ];

  const getPostData = async () => {
    const result = await axios.get(`${FORUM_API}/${id}`);
    setPostValues({ title: result.data.title, content: result.data.content });
    setIsLiked(result.data.isLiked);
    setTag(result.data.tag.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostValues({ ...postValues, [name]: value });
  };

  const handleTagSelect = (e) => {
    setTag(e.target.value);
  };

  const handleSaveClick = async () => {
    if (valuesCheck() === false) return;

    await axios.post(FORUM_API, {
      title: postValues.title,
      content: postValues.content,
      isLiked: isLiked,
      tag: {
        name: tag,
        color: '#ff1357',
      },
    });

    handleMoveClick('/forum');
  };

  const handleModifyClick = async () => {
    if (valuesCheck() === false) return;

    await axios.put(`${FORUM_API}/${id}`, {
      id: { id },
      title: postValues.title,
      content: postValues.content,
      isLiked: isLiked,
      tag: {
        name: tag,
        color: '#ff1357',
      },
    });

    handleMoveClick('/forum');
  };

  const valuesCheck = () => {
    if (!tag || !postValues.title || !postValues.content) {
      alert('값을 모두 채워주세요!!');
      return false;
    }
  };

  const handleLoginCheck = () => {
    alert('로그인 먼저 해주세요');
    handleMoveClick('/');
  };

  const handleCancelClick = () => {
    handleMoveClick('/forum');
  };

  const handleMoveClick = (page) => {
    history.push(page);
  };

  return (
    <PostWriteWrapper>
      <PostWriteContent>
        <Title>질문 {mode === 'write' ? '등록하기' : '수정하기'}</Title>
        <StyledWrapper>
          <div>질문 제목</div>
          <StyledInput
            name="title"
            type="text"
            placeholder="EX) CSS에서 margin과 padding의 차이가 뭔가요?"
            width="1024px"
            value={postValues.title}
            onChange={handleChange}
          />
        </StyledWrapper>
        <StyledWrapper>
          <div>분류</div>
          <StyledSelect onChange={handleTagSelect} value={tag} width="200px">
            {tags.map((tag) => {
              return (
                <option key={tag.id} value={tag.value}>
                  {tag.text}
                </option>
              );
            })}
          </StyledSelect>
        </StyledWrapper>
        <StyledWrapper>
          <div>질문 내용</div>
          <StyledTextArea
            name="content"
            placeholder="EX) margin과 padding의 차이가 궁금합니다 "
            width="100%"
            onChange={handleChange}
            value={postValues.content}
          />
        </StyledWrapper>
        <ButtonWrapper>
          {mode === 'write' ? (
            <StyledButton
              color="white"
              backgroundColor="#2ACB41"
              onClick={() => handleSaveClick()}
            >
              저장
            </StyledButton>
          ) : (
            <StyledButton
              color="white"
              backgroundColor="#2ACB41"
              onClick={() => handleModifyClick()}
            >
              수정
            </StyledButton>
          )}
          <StyledButton
            color="white"
            backgroundColor="#FF6057"
            onClick={() => handleCancelClick()}
          >
            취소
          </StyledButton>
        </ButtonWrapper>
      </PostWriteContent>
    </PostWriteWrapper>
  );
};

export default PostWrite;

const PostWriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 30px 0;
`;

const PostWriteContent = styled.div`
  width: 1024px;
`;

const Title = styled.div`
  font-size: 30px;
`;

const StyledWrapper = styled.div`
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;
