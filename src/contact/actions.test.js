import * as actions from './actions'
import * as types from '../constants'

describe('actions', () => {
  it('should create an action to start form submission', () => {
    const data = {}
    const expectedAction = {
      type: types.CONTACT_SUBMIT_START,
      data
    }
    expect(actions.contactSubmitStart(data)).toEqual(expectedAction)
  }),
  it('should create an action for a successfull submission', () => {
    const data = {}
    const expectedAction = {
      type: types.CONTACT_SUBMIT_SUCCESS,
      data
    }
    expect(actions.contactSubmitSuccess(data)).toEqual(expectedAction)
  }),
  it('should create an action for a failed submission', () => {
    const error = { error: "Failed to save form.", status: 400 }
    const expectedAction = {
      type: types.CONTACT_SUBMIT_FAIL,
      error
    }
    expect(actions.contactSubmitFail(error)).toEqual(expectedAction)
  }),
  it('should create an action reset the form', () => {
    const expectedAction = {
      type: types.CONTACT_RESET
    }
    expect(actions.contactReset()).toEqual(expectedAction)
  })
})
