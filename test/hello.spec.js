/* global define, it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from './../src/js/app';

describe('App Component', () => {
  it('should shallow render', () => {
    expect(shallow(<App />).contains(<div className='jumbotron' >
    <h1 className='display-3 text-center'>Budget Tracker</h1>
  </div>)).to.equal(true);
  });
});
