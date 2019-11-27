import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  height: 100%;
  max-width: 200px;
  background-color: #32323d;
`;

export const Letter = styled.p`
  font-size: 30px;
  color: #fff;
  margin: 10px 0;
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #fff;
  width: 90%;
`;

export const NameContainer = styled.div`
  display: flex;
`;

export const NameText = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
