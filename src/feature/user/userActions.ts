import { createAction } from '@reduxjs/toolkit';
import { UserState } from './userReducer';

export const setUserData = createAction<UserState>('setUserData');
