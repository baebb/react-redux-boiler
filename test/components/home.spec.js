import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from '../../src/containers/home';

describe('Home' , () => {
  let component, store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  
  beforeEach(() => {
    store = mockStore({});
    component = mount(<Home store={store}/>);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
