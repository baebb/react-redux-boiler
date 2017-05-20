import { expect } from 'chai';
//types
import { STORE_QUERY } from '../../src/actions/index';
//actions
import { storeQuery } from '../../src/actions/index';

describe('Actions', () => {
  describe('storeQuery', () => {
    it('has the correct type', () => {
      const action = storeQuery();
      expect(action.type).to.equal( STORE_QUERY );
    });
    
    it('has the correct payload', () => {
      const action = storeQuery('testDog');
      expect(action.payload).to.equal('testDog');
    });
  });
});