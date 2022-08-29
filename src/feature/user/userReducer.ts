import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import * as userActions from './userActions';

export interface UserState {
  userId: number | null;
  lastLogin: string;
  sessionToken: string;
}

const initialState: UserState = {
  userId: null,
  lastLogin: '',
  sessionToken: '',
};

export const userReducer = createReducer(initialState, reducer);

export function reducer(builder: ActionReducerMapBuilder<UserState>) {
  builder.addCase(userActions.setUserData, (state, action) => ({
    ...state,
    ...action.payload,
  }));
}
