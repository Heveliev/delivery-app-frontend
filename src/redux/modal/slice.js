import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalSelectStore: false,
    },
    reducers: {
        isOpenModalSelectStore(state) {
            state.modalSelectStore = !state.modalSelectStore
        }
    }
})



export const { isOpenModalSelectStore } = modalSlice.actions;