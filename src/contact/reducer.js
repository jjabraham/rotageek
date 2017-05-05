import {
  CONTACT_SUBMIT_START,
  CONTACT_SUBMIT_SUCCESS,
  CONTACT_SUBMIT_FAIL,
  CONTACT_RESET
} from '../constants';


const contactFormInitialState = {
  isLoading: false,
  data: {},
  response: {},
  error: {},
  storage: []
};

const contactFormReducer = (state = contactFormInitialState, action) => {
  switch (action.type) {
    case CONTACT_SUBMIT_START:
      return Object.assign({}, state, {
        isLoading: true,
        data: action.data,
        error: {},
        response: {}
      });
    case CONTACT_SUBMIT_SUCCESS:
      const storage = state.storage;
      storage.push(state.data);
      return Object.assign({}, state, {
        isLoading: false,
        response: action.data,
        storage: storage
      });
    case CONTACT_SUBMIT_FAIL:
      return Object.assign({}, state, { error: action.error, isLoading: false });
    case CONTACT_RESET:
      return Object.assign({}, state, contactFormInitialState);
    default:
      return state;
  }
};

export default contactFormReducer;
