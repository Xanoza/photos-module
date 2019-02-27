import React from 'react';
// import styled from 'styled-components';
import moment from 'moment';
import PhotoCarousel from './PhotoCarousel';
import PhotoCarouselRightArrow from './PhotoCarouselRightArrow';
import PhotoCarouselLeftArrow from './PhotoCarouselLeftArrow';
import ajax from '../lib/ajax';

const { styled } = window;

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{}],
      currentImageIndex: this.props.clickedImageIndex,
      randomId: this.props.randomId,
      currentKey: '',
    };
    this.handlePreviousImageClick = this.handlePreviousImageClick.bind(this);
    this.handleNextImageClick = this.handleNextImageClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.getImagesForBanner(this.state.randomId);
    document.addEventListener('keyup', this.handleKeyPress);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      currentImageIndex: nextProps.clickedImageIndex,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  getImagesForBanner(id) {
    ajax.getPhotos(id, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        images: data,
      });
    });
  }

  handlePreviousImageClick(event) {
    event.preventDefault();
    const { currentImageIndex } = this.state;

    this.setState({
      currentImageIndex: currentImageIndex !== 0 ? currentImageIndex - 1 : 0,
    });
  }

  handleNextImageClick(event) {
    event.preventDefault();
    const { currentImageIndex, images } = this.state;

    this.setState({
      currentImageIndex: currentImageIndex !== images.length - 1 ? currentImageIndex + 1 : images.length - 1,
    });
  }

  handleKeyPress(event) {
    event.preventDefault();
    this.setState({
      currentKey: event.keyCode,
    });
    const { currentKey } = this.state;
    if (currentKey === 39) {
      this.handleNextImageClick(event);
    } else if (currentKey === 37) {
      this.handlePreviousImageClick(event);
    } else if (currentKey === 27) {
      this.props.closeModal();
    }
  }

  render() {
    const {
      closeModal, openFlag, closeFlag, displayPhoto, displayFlag,
    } = this.props;
    const { currentImageIndex, images } = this.state;

    return (
      <ModalPhotoDiv style={{ display: displayPhoto }}>
        <InnerModal>
          <Wrapper>
            <PhotoCarouselLeftArrow prevImg={this.handlePreviousImageClick} imageIndex={currentImageIndex} />
            <PhotoCarousel openFlag={openFlag} closeFlag={closeFlag} displayFlag={displayFlag} url={images[currentImageIndex].image_url} caption={images[currentImageIndex].caption} username={images[currentImageIndex].username} date={moment(images[currentImageIndex].date_posted).format('LL')} imageIndex={currentImageIndex} />
            <PhotoCarouselRightArrow nextImg={this.handleNextImageClick} imageIndex={currentImageIndex} images={images} />
          </Wrapper>
        </InnerModal>

        <ExitButtonDiv>
          <ExitButton onClick={closeModal} href="#" />
        </ExitButtonDiv>
      </ModalPhotoDiv>
    );
  }
}

const InnerModal = styled.section`
  position: fixed;
  width: 660px;
  height: 645px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: block;
  margin: 35px;
`;

const ModalPhotoDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
`;

const ExitButtonDiv = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  outline: none;
  cursor: pointer;
`;

const ExitButton = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 15px;
  height: 15px;
  &:before {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 25px;
    width: 2px;
    background-color: #6f737b;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 25px;
    width: 2px;
    background-color: #6f737b;
    transform: rotate(-45deg);
  }
`;

export default PhotoModal;
