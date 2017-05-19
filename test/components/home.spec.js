import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from '../../src/containers/home';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home' , () => {
  let component, store;
  
  beforeEach(() => {
    store = mockStore({
      router: {
        query: {
          string: 'testcat'
        }
      }
    });
    component = mount(<Home store={store}/>);
    // console.log(component.debug());
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
  
  it('has two buttons', () => {
    expect(component.find('button').length).to.equal(2);
  })
});
