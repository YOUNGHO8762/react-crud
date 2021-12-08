import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: ${(props) => props.width};
  height: 300px;
  border-radius: 10px;
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 1rem;
  border: 1px solid gray;

  ::placeholder {
    color: #dddddd;
  }
`;

export default StyledTextArea;
