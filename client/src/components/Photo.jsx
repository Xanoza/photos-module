import React from 'react';
// import styled from 'styled-components';
const { styled } = window;

const Photo = props => (
  <ImgSpan>
    <Img data-index-number={props.index} onClick={event => props.openModal(event)} src={props.photo.image_url} alt="" />
  </ImgSpan>
);


const Img = styled.img`
  height: 18em;
  width: 18em;
  display: inline-block;
  border: 3px solid #2d333f;
`;

const ImgSpan = styled.span`
  ${Img}: hover {
    transform: scale(1.05);
    opacity: 1;
    cursor: pointer;
  }
`;

export default Photo;
