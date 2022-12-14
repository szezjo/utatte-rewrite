import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, StartButton, StartButtonContainer, UtatteLogo, UtatteLogoContainer } from './styles';

function StartScreen() {
  const navigate = useNavigate();

  const handleClick = () => {
    document.documentElement.requestFullscreen();
    navigate('/menu');
  };
  return (
    <>
      <Container>
        <UtatteLogoContainer>
          <UtatteLogo src="/utatteLogo.svg" alt="Utatte Logo" />
        </UtatteLogoContainer>
        <StartButtonContainer>
          <StartButton
            onClick={handleClick}
            whileHover={{ backgroundColor: '#baa2d5', color: '#ffffff' }}
            transition={{ type: 'tween' }}
          >
            START
          </StartButton>
        </StartButtonContainer>
      </Container>
      {/* StartScreen
      <button onClick={() => navigate('/menu')} /> */}
    </>
  );
}

export default StartScreen;
