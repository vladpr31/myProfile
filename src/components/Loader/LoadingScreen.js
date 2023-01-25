import React from "react";
import styled from "styled-components";

export const LoadingStyles = styled.div`
  background-color: black;
  .loading {
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 2em;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .loading:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
  }
  .spinner {
    font-size: 18px;
    font-weight: 600;
    padding-top: 50px;
    margin-left: -75px;
    font-family: monospace;
    letter-spacing: 1em;
    color: #64dfdf;
    filter: drop-shadow(0 0 10px);
    display: flex;
  }

  .spinner span {
    animation: loading6454 1.75s ease infinite;
  }

  .spinner span:nth-child(2) {
    animation-delay: 0.25s;
  }

  .spinner span:nth-child(3) {
    animation-delay: 0.5s;
  }

  .spinner span:nth-child(4) {
    animation-delay: 0.75s;
  }

  .spinner span:nth-child(5) {
    animation-delay: 1s;
  }

  .spinner span:nth-child(6) {
    animation-delay: 1.25s;
  }

  .spinner span:nth-child(7) {
    animation-delay: 1.5s;
  }
  .spinner span:nth-child(8) {
    animation-delay: 1.75s;
  }
  .spinner span:nth-child(9) {
    animation-delay: 2s;
  }
  .spinner span:nth-child(10) {
    animation-delay: 2.25s;
  }

  @keyframes loading6454 {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
  .d1,
  .d2 {
    border: 5px solid #64dfdf;
    border-radius: 50px;
  }

  .loading .d1 {
    margin-left: -20px;
    width: 55px;
    height: 55px;
    position: absolute;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: load161 1s linear infinite;
  }

  .loading .d2 {
    width: 40px;
    height: 40px;
    border-top-color: transparent;
    border-bottom-color: transparent;
    margin-left: -11px;
    margin-top: 6px;
    animation: load2812 2s linear infinite;
  }

  @keyframes load161 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes load2812 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;
const Loading = () => {
  return (
    <LoadingStyles>
      <div className="loading">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="spinner">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </LoadingStyles>
  );
};

export default Loading;
