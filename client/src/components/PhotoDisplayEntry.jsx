import React from 'react';
// import styled from 'styled-components';
const { styled } = window;

const PhotoDisplayEntry = props => (
  <ImgContainer>
    <span>
      <div>
        <MediumImg data-index-number="0" onClick={event => props.openModal(event)} src={props.photos[0].image_url} alt="" />
      </div>
      <div>
        <MediumImg data-index-number="1" onClick={event => props.openModal(event)} src={props.photos[1].image_url} alt="" />
      </div>
    </span>
    <span>
      <LargeImg data-index-number="2" onClick={event => props.openModal(event)} src={props.photos[2].image_url} alt="" />
    </span>
    <span>
      <div>
        <SmallImg data-index-number="3" onClick={event => props.openModal(event)} src={props.photos[3].image_url} alt="" />
      </div>
      <div>
        <SmallImg data-index-number="4" onClick={event => props.openModal(event)} src={props.photos[4].image_url} alt="" />
      </div>
      <div>
        <SmallImg data-index-number="5" onClick={event => props.openModal(event)} src={props.photos[5].image_url} alt="" />
      </div>
    </span>
    <span>
      <div>
        <SmallImg data-index-number="6" onClick={event => props.openModal(event)} src={props.photos[6].image_url} alt="" />
      </div>
      <div>
        <SmallImg data-index-number="7" onClick={event => props.openModal(event)} src={props.photos[7].image_url} alt="" />
      </div>
      <div>
        <LastSmallOverlay>
          <LastSmallImg
            data-index-number="8"
            onClick={event => props.openModal(event)}
            src={props.photos[8].image_url}
            alt=""
          />
          <TextDiv>
            +
            {' '}
            {props.photos.length - 9}
            {' '}
            more
          </TextDiv>
        </LastSmallOverlay>
      </div>
    </span>
  </ImgContainer>

);

export default PhotoDisplayEntry;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const MediumImg = styled.img`
  height: 138.77px;
  width: 138.77px;
`;

const LargeImg = styled.img`
  height: 281.53px;
  width: 280.53px;
  margin: 0 3px;
`;

const SmallImg = styled.img`
  height: 90.84px;
  width: 90.84px;
  margin: 0 2px;
`;

const LastSmallImg = styled.img`
  position: absolute;
  height: 90.84px;
  width: 90.84px;
  margin: 0 2px;
  opacity: .4;
  cursor: pointer;
  &:hover {
    opacity: .7
  }
`;

const LastSmallOverlay = styled.div`
  position: absolute;
  height: 90.84px;
  width: 90.84px;
  margin: 0 2px;
`;

const TextDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 18%;
  font-size: 13px;
  font-weight: 500;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  color: rgba(255, 255, 255, 255);
  text-shadow: 1px 1px #a6a6a6;
  cursor: pointer;
`;
