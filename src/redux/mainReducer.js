import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth3105121Reducer from '../features/EmailAuth3105121/redux/reducers';
import Dashboard18105116Reducer from '../features/Dashboard18105116/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth3105121: EmailAuth3105121Reducer,
Dashboard18105116: Dashboard18105116Reducer,

});