import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoCarousel from '../client/src/components/PhotoCarousel';
import PhotoCarouselLeftArrow from '../client/src/components/PhotoCarouselLeftArrow';
import PhotoCarouselRightArrow from '../client/src/components/PhotoCarouselRightArrow';

configure({
  adapter: new Adapter(),
});

describe('Photo Carousel', () => {
  it('should render PhotoCarousel without throwing an error', () => {
    expect(shallow(<PhotoCarousel />).exists()).toBe(true);
  });

  it('should have the Left Arrow for the photo carousel', () => {
    expect(shallow(<PhotoCarousel />).contains(<PhotoCarouselLeftArrow />));
  });

  it('should have the Right Arrow for the photo carousel', () => {
    expect(shallow(<PhotoCarousel />).contains(<PhotoCarouselRightArrow />));
  });
});
