import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { fetchBlogReducer, searchBlogReducer } from "./reducers/BlogReducers";
import { newsletterSubReducer } from "./reducers/userReducers";

const initialState = {
// initial states in local or session storage
  };

const reducer = combineReducers({
    newsletterSub: newsletterSubReducer,
    blogStore: fetchBlogReducer,
    searchBlog: searchBlogReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;