import { expect } from 'chai';
//types
import { STORE_QUERY } from '../../src/actions/index';
//reducers
import queriesReducer from '../../src/reducers/reducer_queries';

const INIT_STATE = { queryStore: ['existingItem'] };

describe('Reducers', () => {
  describe('reducer_queries', () => {
    let action;
    it('handles action with unknown type', () => {
      action = { type: 'UNKNOWN_TYPE', payload: 'cat' };
      expect(queriesReducer(INIT_STATE, action)).to.eql(INIT_STATE);
    });
    
    it('handles action of type STORE_QUERY', () => {
      action = { type: 'STORE_QUERY', payload: 'testItem' };
      expect(queriesReducer(INIT_STATE, action)).to.eql(
        { queryStore: ['existingItem', 'testItem'] }
      );
    });
  });
});