import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoCarouselRightArrow from '../client/src/components/PhotoCarouselRightArrow';

configure({
  adapter: new Adapter(),
});

describe('Photo Carousel Right Arrow', () => {
  it('should render PhotoCarouselRightArrow without throwing an error', () => {
    expect(shallow(<PhotoCarouselRightArrow />).exists()).toBe(true);
  });

  it('should have left arrow from font awesome', () => {
    expect(shallow(<PhotoCarouselRightArrow />).find('FontAwesomeIcon').exists()).toBe(true);
  });

  it('should simulate a click', () => {
    expect(shallow(<PhotoCarouselRightArrow />).simulate('click'));
  });
});
