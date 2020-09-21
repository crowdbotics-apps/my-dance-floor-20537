import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp12105122Reducer from '../features/SignUp12105122/redux/reducers'
import EmailAuth3105121Reducer from '../features/EmailAuth3105121/redux/reducers';
import Dashboard18105116Reducer from '../features/Dashboard18105116/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp12105122: SignUp12105122Reducer,
EmailAuth3105121: EmailAuth3105121Reducer,
Dashboard18105116: Dashboard18105116Reducer,

});