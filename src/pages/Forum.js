import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pagination from 'rc-pagination';
import { useHistory } from 'react-router';
import { useUserContext } from '../contexts/Context';
import PostList from '../components/Post/PostList';
import StyledInput from '../components/CommonStyled/StyledInput';
import StyledButton from '../components/CommonStyled/StyledButton';
import EmptyResult from './EmptyResult';
import { FORUM_API } from '../config';

const Forum = () => {
  const [postList, setPostList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [mode, setMode] = useState('read');
  const [pageSize] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { accessToken } = useUserContext();

  const history = useHistory();

  useEffect(() => {
    accessToken ? LoadForumData() : handleLoginCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mode === 'read' ? LoadForumData() : handleSearchClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const LoadForumData = async () => {
    const pageCount = await axios.get(`${FORUM_API}`);
    const response = await axios.get(
      `${FORUM_API}?_sort=id&_order=DESC&_page=${currentPage}&_limit=${pageSize}`,
    );
    setPostList(response.data);
    setTotalCount(pageCount.data.length);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClickPageNumber = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSearchClick = async () => {
    if (handleInputCheck() === false) return;
    const pageCount = await axios.get(`${FORUM_API}?title_like=${searchValue}`);
    const response = await axios.get(
      `${FORUM_API}?title_like=${searchValue}&_sort=id&_order=DESC&_page=${currentPage}&_limit=${pageSize}`,
    );
    setMode('search');
    setPostList(response.data);
    setTotalCount(pageCount.data.length);
  };

  const handleInputCheck = () => {
    if (!searchValue) {
      alert('???????????? ??????????????????!');
      return false;
    }
  };

  const handleLoginCheck = () => {
    alert('????????? ?????? ????????????');
    history.push('/');
  };

  const handleWriteClick = () => {
    history.push('/write');
  };

  const handleResetClick = () => {
    setMode('read');
    setSearchValue('');
    LoadForumData();
    setCurrentPage(1);
  };

  return (
    <ForumWrapper>
      <ForumTop>
        <Title>?????? ?????????</Title>
        <div>
          <StyledButton
            onClick={handleResetClick}
            color="white"
            backgroundColor="#D15808"
          >
            ?????? ?????? ?????????
          </StyledButton>
          <StyledButton
            onClick={handleWriteClick}
            color="white"
            backgroundColor="#5A7FFF"
          >
            + ????????? ??????
          </StyledButton>
        </div>
      </ForumTop>
      <SearchBoxWrapper>
        <StyledInput
          onChange={handleInputChange}
          value={searchValue}
          width="1024px"
          placeholder="??????"
        />
        <SearchIcon
          alt="Search"
          src="/images/search.png"
          onClick={handleSearchClick}
        />
      </SearchBoxWrapper>
      {totalCount ? (
        <>
          <PostList postList={postList} />
          <Pagination
            total={totalCount}
            current={currentPage}
            pageSize={pageSize}
            onChange={handleClickPageNumber}
          />
        </>
      ) : (
        <EmptyResult message="?????? ????????? ????????????." />
      )}
    </ForumWrapper>
  );
};

export default Forum;

const ForumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;

const ForumTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
`;

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 15px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
