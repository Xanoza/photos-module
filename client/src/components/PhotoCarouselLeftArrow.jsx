import React from 'react';
// import styled from 'styled-components';
const { styled } = window;

const PhotoCarouselLeftArrow = ({ imageIndex, prevImg }) => {
  const arrowColor = imageIndex === 0 ? '#333333' : '#91949a';

  return (
    <LeftArrowDiv>
      <LeftArrow onClick={prevImg} style={{ color: arrowColor }} />
    </LeftArrowDiv>
  );
};

const LeftArrowDiv = styled.div`
  &:hover {
    color: #6f737b;
  }
  position: absolute;
  top: 50%;
  left: 0;
  outline: none;
  cursor: pointer;
`;

const LeftArrow = styled.i`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  height: 5px;
  width: 5px;
`;

export default PhotoCarouselLeftArrow;
