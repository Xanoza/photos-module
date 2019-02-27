import React from 'react';
// import styled from 'styled-components';
import SaveThisRestaurantButton from './SaveThisRestaurantButton';
import PhotoBanner from './PhotoBanner';
import PhotoModal from './PhotoModal';
import PhotoDisplay from './PhotoDisplay';
import ajax from '../lib/ajax';

const { styled } = window;

class App extends React.Component {
  constructor(props) {
    super(props);
    let id = 1;

    const pathName = window.location.pathname.split('/');
    const restaurantId = parseInt(pathName[1], 10);
    if (!Number.isNaN(restaurantId)) {
      id = restaurantId;
    }

    this.state = {
      photos: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      randomId: id,
      displayPhoto: 'none',
      displayFlag: 'none',
      clickedImageIndex: 0,
    };
    this.openPhotoModal = this.openPhotoModal.bind(this);
    this.closePhotoModal = this.closePhotoModal.bind(this);
    this.openFlagModal = this.openFlagModal.bind(this);
    this.closeFlagModal = this.closeFlagModal.bind(this);
  }

  componentDidMount() {
    this.getPhotosForBanner(this.state.randomId);
  }

  getPhotosForBanner(id) {
    ajax.getPhotos(id, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        photos: data,
      });
    });
  }

  openPhotoModal(event) {
    this.setState({
      displayPhoto: 'block',
      clickedImageIndex: parseInt(event.target.dataset.indexNumber, 10),
    });
  }

  closePhotoModal() {
    this.setState({
      displayPhoto: 'none',
    });
  }

  openFlagModal(index) {
    this.setState({
      displayFlag: 'block',
      clickedImageIndex: index,
    });
  }

  closeFlagModal() {
    this.setState({
      displayFlag: 'none',
    });
  }

  render() {
    const {
      photos, randomId, displayPhoto, displayFlag, clickedImageIndex,
    } = this.state;

    return (
      <div>
        <MainBannerDiv>

          <PhotoBanner
            photos={photos}
            openModal={this.openPhotoModal}
            closeModal={this.closePhotoModal}
          />

          <SaveThisRestaurantButton />

        </MainBannerDiv>

        <OverviewPlaceholder />
        <PhotoContainer>
          <NumberOfPhotos>
            {photos.length}
            {' '}
            Photos
          </NumberOfPhotos>
          <Display>
            <PhotoDisplay
              photos={photos}
              openModal={this.openPhotoModal}
              closeModal={this.closePhotoModal}
            />
          </Display>
        </PhotoContainer>
        <PhotoModal
          randomId={randomId}
          photos={photos}
          closeModal={this.closePhotoModal}
          openFlag={this.openFlagModal}
          closeFlag={this.closeFlagModal}
          displayPhoto={displayPhoto}
          displayFlag={displayFlag}
          clickedImageIndex={clickedImageIndex}
        />
      </div>
    );
  }
}

export default App;

const OverviewPlaceholder = styled.div`
  height: 400px;
  margin: 0 200px;
  width: 620px;
  background-color: white;
`;

const MainBannerDiv = styled.div`
  margin: 10px;
  position: relative;
`;

const PhotoContainer = styled.div`
  margin-left: 200px;
  width: 620px;
  height: auto;
`;

const Display = styled.div`
  display: block;
  width: auto;
  height: auto;
`;

const NumberOfPhotos = styled.h2`
  font-family: 'Istok Web', sans-serif;
  font-size: 1.35em;
  font-weight: 600;
  line-height: 1.5em;
  color: #2d333f
  padding-bottom: .5em;
  border-bottom: 1px solid #d8d9db;
  margin-bottom: .75em;
  display: flex;
  justify-content: space-between;
`;
