import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';

export default (history: any) =>
  combineReducers({
    auth,
    toastr,
    router: connectRouter(history),
  });
