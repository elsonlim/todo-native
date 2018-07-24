import React from 'react';
import renderer from 'react-test-renderer';
import { it, expect } from 'jest';
import App from './App';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
