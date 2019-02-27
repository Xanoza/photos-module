import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoCarouselLeftArrow from '../client/src/components/PhotoCarouselLeftArrow';

configure({
  adapter: new Adapter(),
});

describe('Photo Carousel Left Arrow', () => {
  it('should render PhotoCarouselLeftArrow without throwing an error', () => {
    expect(shallow(<PhotoCarouselLeftArrow />).exists()).toBe(true);
  });

  it('should have left arrow from font awesome', () => {
    expect(shallow(<PhotoCarouselLeftArrow />).find('FontAwesomeIcon').exists()).toBe(true);
  });

  it('should simulate a click', () => {
    expect(shallow(<PhotoCarouselLeftArrow />).simulate('click'));
  });
});
