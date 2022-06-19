import React from 'react';
import styled from 'styled-components';
const size = (s: string) => `calc(50% -  ${Number.parseInt(s) / 2}px)`;

const Wrapper = styled.div<{ size: string }>`
  .circular {
    width: ${props => props.size};
    height: ${props => props.size};
    animation: rotate 2s linear infinite;
    transform-origin: center center;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }

  @keyframes color {
    0%,
    100% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
`;

interface ILoadingOption {
  size?: string;
}
export const Loading: React.FC<ILoadingOption> = ({ size = '100px' }) => {
  return (
    <Wrapper size={size}>
      <svg className="circular" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
        ></circle>
      </svg>
    </Wrapper>
  );
};
