import { configureStore } from '@reduxjs/toolkit'
import reducer from '../redux/reducers/reducer'

const store = configureStore({
    reducer: reducer
})
export default store