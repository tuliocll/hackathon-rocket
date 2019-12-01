import React, { useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';

import {
  Container,
  LeftContainer,
  Letter,
  Separator,
  RightContainer,
  NameContainer,
  Wrapper,
  CourseContainer,
  CourseContent,
  ContentWrapper,
  Starter,
  CourseContentStarter,
  Courses,
} from './styles';

import avatar from '../../assets/images/avatar.png';
import coin from '../../assets/images/coin.png';
import monitor from '../../assets/images/monitor.png';
import facebook from '../../assets/images/facebook.png';

export default function Dashboard() {
  useEffect(() => {
    NotificationManager.info('Escolha o modulo do facebook para continuar!');
  }, []);

  return (
    <Container>
      <LeftContainer>
        <Letter>K</Letter>
        <Separator />
        <Wrapper>
          <img src={monitor} alt="monitor" />
          <img src={coin} alt="coin" />
          <div>
            <img src={avatar} alt="avatar" />
          </div>
        </Wrapper>
      </LeftContainer>
      <RightContainer>
        <NameContainer>
          <p>Bem vindo, Kleiton</p>
        </NameContainer>
        <Courses>
          <CourseContainer>
            <ContentWrapper>
              <CourseContent>
                <p>LP</p>
              </CourseContent>
              <CourseContent>
                <p>LP</p>
              </CourseContent>
            </ContentWrapper>
            <ContentWrapper>
              <CourseContent>
                <p>LP</p>
              </CourseContent>
              <CourseContent>
                <p>LP</p>
              </CourseContent>
            </ContentWrapper>
            <CourseContentStarter>
              <Starter>LP</Starter>
            </CourseContentStarter>
          </CourseContainer>
          <CourseContainer>
            <ContentWrapper>
              <CourseContent>
                <Link to="game">
                  <img src={facebook} alt="facebook" />
                </Link>
              </CourseContent>
              <CourseContent>
                <Link to="game">
                  <img src={facebook} alt="facebook" />
                </Link>
              </CourseContent>
            </ContentWrapper>
            <ContentWrapper>
              <CourseContent>
                <Link to="game">
                  <img src={facebook} alt="facebook" />
                </Link>
              </CourseContent>
              <CourseContent>
                <Link to="game">
                  <img src={facebook} alt="facebook" />
                </Link>
              </CourseContent>
            </ContentWrapper>
            <CourseContentStarter>
              <Link to="game">
                <img src={facebook} alt="facebook" />
              </Link>
            </CourseContentStarter>
          </CourseContainer>
        </Courses>
      </RightContainer>
    </Container>
  );
}
