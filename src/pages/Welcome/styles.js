import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 427px;
  height: 427px;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 68px;

  > h1 {
    color: #fff;
    font-size: 36px;
    letter-spacing: 1.3px;
    margin-bottom: 27px;
  }

  > div {
    color: #fff;
    font-size: 16px;
    letter-spacing: 1.2px;
    text-align: center;
    margin-bottom: 27px;
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
  cursor: pointer;
`;
