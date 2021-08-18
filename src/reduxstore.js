import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './components/login-component/loginslice'

export default configureStore({
  reducer: {
      loggedIn:loginReducer
  }
})