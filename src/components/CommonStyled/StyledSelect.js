import styled from 'styled-components';

const StyledSelect = styled.select`
  width: ${(props) => props.width};
  height: 50px;
  margin-top: 0.5rem;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
`;

export default StyledSelect;
