import React from 'react';
import styled from 'styled-components';

const NavHover = ({ onProfileClick, onLogoutClick }) => {
  return (
    <NavHoverWrapper>
      <Menu onClick={() => onProfileClick('/profile')}>프로필</Menu>
      <Menu onClick={() => onLogoutClick()}>로그아웃</Menu>
    </NavHoverWrapper>
  );
};

export default NavHover;

const NavHoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  right: -5px;
  width: 100px;
  height: 50px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:hover {
    background-color: #dddddd;
  }
`;
