import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 45%;
`;

export const CodeContainer = styled.div`
  display: flex;
  margin: 10px;
  width: 100%;
  background: #262730;
  border-radius: 6px;
  flex-direction: row-reverse;
`;

export const Code = styled.textarea`
  height: 300px;
  width: 97%;
  background: #36393f;
  border-color: #0000;
  border-radius: 6px;
  resize: none;
  padding: 10px;
  color: #fff;
`;
