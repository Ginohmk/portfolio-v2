import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 10rem;

  h2 {
    display: flex;
    flex-direction: column;
    gap: 10px;

    position: relative;
    left: 100%;

    animation: floatLeft 1s ease-in-out forwards;
    transition: left 1s ease-in-out;

    @keyframes floatLeft {
      0% {
        left: 100%;
      }

      100% {
        left: 0%;
      }
    }
  }

  .hero_wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      align-self: center;
      text-align: justify;
      max-width: 980px;
      line-height: 2rem;
      letter-spacing: 1.5px;
      transform: scale(0);
      animation: scaleIn 1s ease-in-out forwards;
      transition: transform 1s ease-in-out;
      word-wrap: normal;
      word-spacing: 5px;

      @keyframes scaleIn {
        0% {
          transform: scale(0);
        }

        100% {
          transform: scale(1);
        }
      }
    }
  }

  .btn-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-self: center;
    gap: 1.5rem;
    max-width: 500px;
    width: 100%;

    a {
      text-decoration: none;
    }
  }

  button {
    align-self: center;
    position: relative;
    right: 100%;

    animation: floatRight 1s ease-in-out forwards;
    transition: right 1s ease-in-out;

    @keyframes floatRight {
      0% {
        right: 100%;
      }

      100% {
        right: 0%;
      }
    }
  }
`;
