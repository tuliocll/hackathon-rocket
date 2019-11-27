import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 68px;
`

export const ContentGameName = styled.div`
  margin-bottom: 24px;
   
  h1 {
    color: #FFF;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #fff;
  border-radius: 7px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fff;
  margin-top: 32px;
  padding-top: 32px;

  a {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
`;

export const Button = styled(Link)`
  width: 380px;
  height: 51px;
  line-height: 51px;
  border: 0;
  border-radius: 4px;
  background: #1159cb;
  color: #fff;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
`;
