import React from 'react';
// import styled from 'styled-components';
import FlagModal from './FlagModal';

const { styled } = window;

const PhotoCarousel = (props) => {
  const {
    url, caption, date, username, openFlag, closeFlag, displayFlag, imageIndex,
  } = props;
  return (
    <div>
      <div>
        <CarouselDiv style={{
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        />
      </div>
      <div>
        <span>
          <CaptionWrapper>
            <Caption>{caption}</Caption>
            <Date>{date}</Date>
          </CaptionWrapper>
          <div>
            <Username>{username}</Username>
          </div>
        </span>
        <FlagSpan onClick={() => openFlag(imageIndex)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="_24._Tiny_Flag_Icon" fill="#fff" d="M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z" transform="translate(-464 -463)" />
          </svg>
        </FlagSpan>
        <FlagModal closeFlag={closeFlag} displayFlag={displayFlag} />
      </div>
    </div>
  );
};

const CarouselDiv = styled.div`
  display: flex;
  justify-item: center;
  margin: auto;
  position: relative;
  height: 590px;
  width: 590px;
  transition: 'transform ease-out 0.45s';
`;

const Caption = styled.span`
  color: #fff;
  height: auto;
  position: relative;
  margin: 10px 5px 0 0;
  font-size: 1em;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-weight: 700;
`;

const Username = styled.div`
  display: block;
  font-size: .85em;
  font-weight: 200;
  height: auto;
  position: relative;
  margin: 0;
  color: #fff;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const Date = styled.span`
  display: in-line block;
  font-weight: 200;
  font-size: 1em;
  height: auto;
  position: relative;
  margin-top: 10px;
  color: #fff;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const CaptionWrapper = styled.div`
  margin: 5px 0;
`;

const FlagSpan = styled.span`
  position: absolute;
  right: 5.5%;
  bottom: -3%;
`;

export default PhotoCarousel;
