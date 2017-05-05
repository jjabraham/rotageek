import { fakeAjax } from '../utils';
import {
  CONTACT_SUBMIT_START,
  CONTACT_SUBMIT_SUCCESS,
  CONTACT_SUBMIT_FAIL,
  CONTACT_RESET
} from '../constants';


export const contactSubmitStart = (data) => (
  {
    type: CONTACT_SUBMIT_START,
    data
  }
);

export const contactSubmitSuccess = (data) => (
  {
    type: CONTACT_SUBMIT_SUCCESS,
    data
  }
);

export const contactSubmitFail = (error) => (
  {
    type: CONTACT_SUBMIT_FAIL,
    error
  }
);

export const contactReset = () => (
  {
    type: CONTACT_RESET
  }
);



// Thunks
export function submitContact(data) {
  return (dispatch) => {
    dispatch(contactSubmitStart(data));
    fakeAjax(data.fail ? 'failure' : 'success')
      .then(res => {
        dispatch(contactSubmitSuccess(res));
      }).catch(err => {
        dispatch(contactSubmitFail(err));
      });
  };
}
