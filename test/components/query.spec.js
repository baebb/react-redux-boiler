import React from 'react';
import {Provider} from 'react-redux';
import chai from 'chai';
import {expect} from 'chai';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import chaiEnzyme from 'chai-enzyme'

import {RouterProvider} from 'redux-little-router';


chai.use(chaiEnzyme());

import Query from '../../src/containers/query';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Query', () => {
  let component, store;
  
  beforeEach(() => {
    store = mockStore({
      router: {
        query: {
          string: 'testcat'
        }
      }
    });
    // this doesn't work
    component = mount(
      <Provider store={store}>
        <Query />
      </Provider>
    );
    // console.log(component.debug());
  });
  
  it('shows the query string', () => {
    expect(component.find('.big-number')).to.have.text('testcat');
  });
  
});