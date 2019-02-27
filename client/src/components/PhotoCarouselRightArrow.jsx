import React from 'react';
// import styled from 'styled-components';
const { styled } = window;

const PhotoCarouselRightArrow = ({ imageIndex, images, nextImg }) => {
  const arrowColor = imageIndex === images.length - 1 ? '#333333' : '#91949a';

  return (
    <RightArrowDiv>
      <RightArrow onClick={nextImg} style={{ color: arrowColor }} />
    </RightArrowDiv>
  );
};

const RightArrowDiv = styled.div`
  &:hover {
    color: #6f737b;
  }
  position: absolute;
  top: 50%;
  right: 0;
  outline: none;
  cursor: pointer;
`;

const RightArrow = styled.i`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  height: 5px;
  width: 5px;
`;

export default PhotoCarouselRightArrow;
