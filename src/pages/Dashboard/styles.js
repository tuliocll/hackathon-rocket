import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftContainer = styled.div`
  position: absolute;
  width: 10%;
  height: 100%;
  max-width: 200px;
  background-color: #32323d;
`;

export const Letter = styled.p`
  font-size: 30px;
  color: #fff;
  margin: 10px 0;
  text-align: center;
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #fff;
  width: 90%;
  margin: 0 auto;
`;

export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 20px;

  > p {
    font-weight: bold;
    font-size: 24px;
    color: #fff;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img:first-child {
    margin: 48px 0;
  }
`;

export const CourseContainer = styled.div`
  display: flex;
  justify-content: space-around;

  flex-direction: column;
  width: 392px;
  height: 462px;

  background: #34353f;
  border-radius: 7px;
  margin-left: 15%;
  margin-top: 20px;
  padding-top: 96px;
  position: relative;
`;

export const CourseContent = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  /* border: 20px solid #262730;*/
  border-radius: 7px;

  p {
    font-weight: 600;
    font-size: 36px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    background-color: #ede407;
    width: 60px;
    height: 60px;
    display: block;
    line-height: 60px;
    border-radius: 7px;
  }
`;

export const Starter = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  background-color: #ede407;
  width: 60px;
  height: 60px;
  display: block;
  line-height: 60px;
  border-radius: 7px;
`;

export const CourseContentStarter = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  border: 20px solid #100f12;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 50%;
  transform: translate(0, 0);

  background: #ffffff;
  /* border: 20px solid #262730;*/
  border-radius: 7px;

  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -65px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Courses = styled.div`
  display: flex;
  flex-direction: row;
`;
