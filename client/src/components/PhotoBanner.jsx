import React from 'react';
// import styled from 'styled-components';
import Photo from './Photo';

const { styled } = window;
// const keyframes = styled

const PhotoBanner = (props) => {
  const { photos, openModal, closeModal } = props;
  return (
    <PhotoDiv>
      <PhotoInnerDiv>
        {photos.map((photo, i) => (
          <Photo photo={photo} key={photo.id} index={i} openModal={openModal} closeModal={closeModal} />
        ))}
      </PhotoInnerDiv>
    </PhotoDiv>
  );
};

const scroll = styled.keyframes`
  {
    0%{
      transform: translate3d(0, 0, 0);
    }
    100%{
      transform: translate3d(-900px, 0, 0);
    }
  }
`;

const PhotoInnerDiv = styled.div`
  display: block;
  width: 200%;
  margin: auto;
  padding: .75em;
  position: absolute;
  animation: ${scroll} 30s linear infinite;
`;

const PhotoDiv = styled.div`
  display: inline-block;
  height: 19em;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  margin: auto;
  ${PhotoInnerDiv}: hover {
    animation-play-state: paused;
  }
`;

export default PhotoBanner;
