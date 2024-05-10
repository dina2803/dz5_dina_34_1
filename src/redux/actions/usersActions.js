import { createAsyncThunk } from '@reduxjs/toolkit'
import {usersAction} from "../reducers/usersReducer";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, {dispatch}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error('Failed to fetch users')
        }
        const data = await response.json()
        console.log(response.status)
        if (response.status === 200) {
            dispatch(usersAction.setUsers(data))
        }
        return data
    }
)