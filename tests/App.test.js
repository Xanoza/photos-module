import React from 'react';
import {
  configure,
  mount,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../client/src/components/App';

configure({
  adapter: new Adapter(),
});

describe('App', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  it('should have PhotoBanner as child component', () => {
    expect(shallow(<App />).find('PhotoBanner').exists()).toBe(true);
  });

  it('should have SaveThisRestaurantButton as child component', () => {
    expect(shallow(<App />).find('SaveThisRestaurantButton').exists()).toBe(true);
  });

  it('should have PhotoModal as child component', () => {
    expect(shallow(<App />).find('PhotoModal').exists()).toBe(true);
  });

  it('should check for photos state', () => {
    expect(shallow(<App />).state()).toHaveProperty('photos');
  });

  it('should check for randomId state', () => {
    expect(shallow(<App />).state()).toHaveProperty('randomId');
  });

  it('should check for displayPhoto state', () => {
    expect(shallow(<App />).state()).toHaveProperty('displayPhoto');
  });

  it('should check for displayFlag state', () => {
    expect(shallow(<App />).state()).toHaveProperty('displayFlag');
  });

  it('Mounts to match snapshot', () => {
    const wrap = mount(<App />);
    expect(toJson(wrap)).toMatchSnapshot();
  });
});
