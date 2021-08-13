import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Card from '../src/components/Card';

const view = renderer.create(
  <Card select={true} onPress={jest.fn()} item={jest.fn()} />,
);

it('Test the rendering of the Card component', () => {
  expect(view.toJSON()).toMatchSnapshot();
});
