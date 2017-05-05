import reducer from './reducer'
import * as types from '../constants'

describe('contact reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      isLoading: false,
      data: {},
      response: {},
      error: {},
      storage: []
    })
  }),
  it('should handle CONTACT_SUBMIT_START', () => {
    const initialState = {
      isLoading: false,
      data: {},
      response: {},
      error: {},
      storage: []
    };
    const data = {
      fullname: 'John Abraham',
      email: '1@1.com',
      phone: '123456789',
      message: 'Hi There!!'
    }
    expect(
      reducer(initialState, {
        type: types.CONTACT_SUBMIT_START,
        data
      })
    ).toEqual({
      isLoading: true,
      data: {
        fullname: 'John Abraham',
        email: '1@1.com',
        phone: '123456789',
        message: 'Hi There!!'
      },
      response: {},
      error: {},
      storage: []
    })
  })
})
