import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: ${(props) => props.width};
  margin-top: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 10px;

  ::placeholder {
    color: #dddddd;
  }
`;

export default StyledInput;
