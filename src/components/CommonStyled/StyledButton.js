import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem;
  width: ${(props) => props.width};
  border-radius: 10px;
  background: ${(props) =>
    props.disabled ? '#dddddd' : props.backgroundColor};
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : 'black')};
  cursor: pointer;
`;

export default StyledButton;
