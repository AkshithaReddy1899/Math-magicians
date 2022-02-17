import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quote from '../components/Quote';

describe('Test for components', () => {
  it('Home renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Calculator renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
