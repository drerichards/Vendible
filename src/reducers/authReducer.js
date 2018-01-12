import { ON_LOGOUT, FETCH_USER_SUCCESS } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS: {
          return {
            ...state,
            id: action.id,
            email: action.email
          }
        }
        case ON_LOGOUT:
            // console.log('hello world1')
            window.localStorage.clear()
            // console.log('hello world2')

            // localStorage.removeItem('state')
            // localStorage.removeItem('userEmail')
            // localStorage.removeItem('userId')
            localStorage.setItem('state', '')
            // console.log('hello world3')
            localStorage.setItem('userEmail', '')
            // console.log('hello world4')
            localStorage.setItem('userId', '')
            // window.location = '/'
            return state = {}
        default:
            return state
    }
}
