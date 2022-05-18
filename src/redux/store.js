import { configureStore } from '@reduxjs/toolkit'

import appReducer from './_app';

export default configureStore({
  reducer: {
    app: appReducer
  }
})