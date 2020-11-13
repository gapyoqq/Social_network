import React from "react";
import {ActionType} from "./redux-store";

type InitialStateType = {
    userId: string
    email: string
    login: string
    isFetching?: boolean
    isAuth: false
}

let initialState = {}


export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
    }
}

export type DataAuthType = {
    userId: string,
    email: string,
    login: string
}

export type SetUserDataType = {
    type: 'SET-USER-DATA'
    data: DataAuthType
}

export const setAuthUserData = (data: { userId: string, email: string, login: string }): SetUserDataType => ({
    type: 'SET-USER-DATA', data
})
