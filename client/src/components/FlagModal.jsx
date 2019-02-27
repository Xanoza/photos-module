import React from 'react';
// import styled from 'styled-components';
const { styled } = window;

const FlagModal = (props) => {
  const { closeFlag, displayFlag } = props;

  return (
    <FlagDiv style={{ display: displayFlag }}>
      <FlagInnerModal>
        <div>
          <FlagHeader>Report a photo problem</FlagHeader>
        </div>
        <div>
          <OptionsButton type="button">Unrelated to restaurant</OptionsButton>
        </div>
        <div>
          <OptionsButton type="button">Inappropriate content</OptionsButton>
        </div>
        <div>
          <OptionsButton type="button">I don&apos;t like this photo</OptionsButton>
        </div>
        <div>
          <CancelButton type="button" onClick={closeFlag}>Cancel</CancelButton>
        </div>
      </FlagInnerModal>
    </FlagDiv>
  );
};

const FlagInnerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const FlagHeader = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  padding: 1rem;
  border-bottom: 1px solid rgba(0,0,0,.0784314);
  margin-bottom: 5px;
}
`;

const OptionsButton = styled.button`
  background-color: #61bddb;
  border-color: #2b9abf;
  color: #fff;
  border-width: 0;
  display: block;
  font-size: 16px;
  font-weight: 400;
  width: 90%;
  margin: 5px auto;
  padding: .6rem 1.75rem;
  text-align: center;
  border-radius: 3px;
  outline: none;
`;

const CancelButton = styled.button`
    display: block;
    font-size: 16px;
    font-weight: 400;
    width: 90%;
    margin: 5px auto 10px auto;
    padding: .6rem 1.75rem;
    text-align: center;
    border-radius: 3px;
    background-color: #fff;
    border-color: #2b9abf;
    color: #2b9abf;
    border-width: .05rem;
    outline: none;
`;

const FlagDiv = styled.div`
  position: fixed;
  top: 30%;
  left: 27%;
  width: 50%;
  height: auto;
  background: rgb(255, 255, 255);
  border-radius: 1%;
`;

export default FlagModal;
