import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mediaReducer from "./media";
import projectReducer from "./project";
import allProjectsReducer from "./allProjects";
import allCategoriesReducer from "./allCategories";
import allDonorsReducer from "./allDonors";
import allTiersReducer from "./allTiers"
import session from "./session"

const rootReducer = combineReducers({
    session,
    MediaList: mediaReducer,
    project: projectReducer,
    allProjects: allProjectsReducer,
    allCategories: allCategoriesReducer,
    allDonors: allDonorsReducer,
    allTiers: allTiersReducer,

});


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
