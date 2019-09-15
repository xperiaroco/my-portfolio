import {
  FETCH_USER,
  SET_USER_LOADING,
  SET_USER_ERROR,
  SET_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_ERROR,
  GET_USER
} from '@/store/auth/actions';
import api from '@/api';

const state = {
  loading: false,
  error: false,
  user: null
};

const getters = {
  [GET_USER_LOADING]: (state) => state.loading,
  [GET_USER_ERROR]: (state) => state.error,
  [GET_USER]: (state) => state.user
};

const mutations = {
  [SET_USER_ERROR]: (state, error) => {
    state.loading = false;
    state.error = error;
  },
  [SET_USER_LOADING]: (state) => state.loading = true,
  [SET_USER_SUCCESS]: (state, user) => {
    state.error = false;
    state.loading = false;
    state.user = user;
  }
};

const actions = {
  [FETCH_USER]: async ({ commit }, credentials) => {
    let user;

    commit(SET_USER_LOADING);

    try {
      user = await api.fetchUser(credentials);
    } catch (e) {
      commit(SET_USER_ERROR, e);
    }

    user && commit(SET_USER_SUCCESS, user);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
