import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoModal from '../client/src/components/PhotoModal';

configure({
  adapter: new Adapter(),
});

describe('Photo Modal', () => {
  it('should check for currentImageIndex state', () => {
    expect(shallow(<PhotoModal />).state()).toHaveProperty('currentImageIndex');
  });

  it('should check for images state', () => {
    expect(shallow(<PhotoModal />).state()).toHaveProperty('images');
  });

  it('should check for randomId state', () => {
    expect(shallow(<PhotoModal />).state()).toHaveProperty('randomId');
  });
});
