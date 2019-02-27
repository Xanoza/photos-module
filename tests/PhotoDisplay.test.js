import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoDisplay from '../client/src/components/PhotoDisplay';

configure({
  adapter: new Adapter(),
});

describe('PhotoDisplay', () => {
  it('should have PhotoDisplayEntry as child component', () => {
    expect(shallow(<PhotoDisplay />).find('PhotoDisplayEntry').exists()).toBe(true);
  });
});
