import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return state.user ? true : false;
});

export const getToken = createSelector(getAuthState, (state) => {
  return state.user ? state.user.getUserToken() : null;
});

export const isAdmin = createSelector(getAuthState, (state) => {
  return state.user ? state.user.getUserType() === 'admin' : null;
});

export const isUser = createSelector(getAuthState, (state) => {
  return state.user ? state.user.getUserType() === 'user' : null;
});

export const LoggedinUser = createSelector(getAuthState, (state) => {
  return state.user ? `Naveed (${state.user.username})` : '';
});
