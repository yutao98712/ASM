import styled from 'styled-components';

const CustomButton = styled.button`
  background: #fff;
  width: 90px;
  height: 35px;
  border: 1px solid #000000;
  border-color: ${props => props.color};
  border-radius: 5px;
  outline: none;
  color: ${props => props.color};
  &:hover {
    background: ${props => props.color};
    color: #fff;
    cursor: pointer;
  }
  margin-right: 10px;
`;

export default CustomButton;
