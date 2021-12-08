import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useUserContext } from '../../contexts/Context';
import NavHover from './NavHover';

const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  const { userName, setUserName, setAccessToken } = useUserContext();
  const history = useHistory();

  const handleMoveClick = (page) => {
    history.push(page);
  };

  const handleLogoutClick = () => {
    setUserName('');
    setAccessToken('');
    handleMoveClick('/');
  };

  const handleIsHover = (value) => {
    setIsHover(value);
  };

  return (
    <NavWrapper>
      <NavContent>
        <Logo
          src="/images/home.png"
          onClick={() => handleMoveClick('/forum')}
        />
        <UserInformation>
          <UserImage src="/images/profile.png" />
          <div onMouseLeave={() => handleIsHover(false)}>
            <span onMouseEnter={() => handleIsHover(true)}>{userName}</span>
            {isHover && (
              <NavHover
                onMouseEnter={() => handleIsHover(true)}
                onProfileClick={handleMoveClick}
                onLogoutClick={handleLogoutClick}
              />
            )}
          </div>
        </UserInformation>
      </NavContent>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 92px;
  background-color: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
`;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 30px;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 30px;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid #dddddd;
`;
