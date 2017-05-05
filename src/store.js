import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loadState, saveState } from './utils';

const middleware = applyMiddleware(thunk);
const persistedState = loadState();

if (persistedState) {
  persistedState.contact.isLoading = false;
  persistedState.contact.response = {};
  persistedState.contact.error = {};
}
const store = createStore(
  reducers,
  persistedState,
  compose(
    middleware,
    window.devToolsExtension && window.devToolsExtension()
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
