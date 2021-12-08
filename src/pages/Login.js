import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../contexts/Context';
import StyledInput from '../components/CommonStyled/StyledInput';
import StyledButton from '../components/CommonStyled/StyledButton';
import { LOGIN_API } from '../config';

const Login = () => {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });

  const { setUserName, setAccessToken } = useUserContext();

  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  const history = useHistory();

  useEffect(() => {
    checkEmailValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginValues.email]);

  useEffect(() => {
    checkPasswordValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginValues.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const checkEmailValidation = () => {
    if (!loginValues.email) return;
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    !emailRegex.test(loginValues.email)
      ? setEmailValidation(false)
      : setEmailValidation(true);
  };

  const checkPasswordValidation = () => {
    if (!loginValues.password) return;
    const passwordRegex = /^[a-z0-9_]{10,20}$/;
    !passwordRegex.test(loginValues.password)
      ? setPasswordValidation(false)
      : setPasswordValidation(true);
  };

  const handleLoginClick = async () => {
    const response = await axios.get(
      `${LOGIN_API}?email=${loginValues.email}&password=${loginValues.password}`,
    );
    response.data.length
      ? saveUserData(response.data[0].username)
      : alert('아이디와 비밀번호를 확인해 주세요!');
  };

  const saveUserData = (userName) => {
    setUserName(userName);
    setAccessToken(new Date().getTime());
    history.push('/forum');
  };

  return (
    <LoginWrapper>
      <LoginContent>
        <Title>로그인</Title>
        <StyledInput
          name="email"
          type="text"
          placeholder="아이디"
          width="500px"
          onChange={handleChange}
        />
        {emailValidation ||
          (loginValues.email.length ? (
            <ConfirmMessage>이메일 형식을 확인해 주세요</ConfirmMessage>
          ) : (
            ''
          ))}
        <StyledInput
          name="password"
          type="password"
          placeholder="비밀번호"
          width="500px"
          onChange={handleChange}
          maxLength="20"
        />
        {passwordValidation ||
          (loginValues.password.length ? (
            <ConfirmMessage>비밀번호는 10자리 이상입니다.</ConfirmMessage>
          ) : (
            ''
          ))}
        <FindPasswordWrapper>
          <ForgotPassword>비밀번호를 잊어버리셨나요?</ForgotPassword>
          <FindPassword>비밀번호 찾기</FindPassword>
        </FindPasswordWrapper>
        <StyledButton
          width="500px"
          backgroundColor="#FFD439"
          onClick={() => handleLoginClick()}
          disabled={!emailValidation || !passwordValidation ? true : false}
        >
          로그인
        </StyledButton>
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContent = styled.div`
  margin-top: 10rem;
`;

const Title = styled.div`
  font-size: 30px;
`;

const ConfirmMessage = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  color: red;
`;

const FindPasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const ForgotPassword = styled.span`
  color: gray;
`;

const FindPassword = styled.span`
  border-bottom: 1px solid gray;
  color: gray;
  cursor: pointer;
`;
