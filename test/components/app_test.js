import { renderComponent , expect } from '../test_helper';
import Home from '../../src/containers/home';

describe('Home' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
