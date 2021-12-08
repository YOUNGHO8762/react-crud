import React from 'react';
import styled from 'styled-components';

const Label = ({ name, color }) => {
  return <>{name && <LabelWrapper color={color}>{name}</LabelWrapper>}</>;
};

export default Label;

const LabelWrapper = styled.span`
  padding: 0.1rem 0.5rem;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  border: 1px solid #dddddd;
`;
