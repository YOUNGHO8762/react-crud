import React from 'react';
import styled from 'styled-components';

const EmptyResult = ({ message }) => {
  return <NoDataWrapper>{message}</NoDataWrapper>;
};

export default EmptyResult;

const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  height: 600px;
  font-size: 30px;
  color: gray;
`;
