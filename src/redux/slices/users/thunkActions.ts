import axios from 'axios';
import type { ThunkActionCreater } from '../../store';
import { logoutUser, setUser } from './userSlice';
import type { UserFromBackend } from '../../../../types/userType';
import type { LoginForm, SignUpForm } from '../../../../types/formType';

export const signUpThunk: ThunkActionCreater<SignUpForm> = (formData) => async (dispatch) => {
  const res = await axios.post<UserFromBackend>('/auth/signup', {
    nickname: formData.nickname,
    email: formData.email,
    password: formData.password,
  });
  console.log('res.user', res);
  if (res.status === 200) {
    dispatch(setUser({ ...res.data, status: 'logged' }));
    return true;
  }
};

export const loginUserThunk: ThunkActionCreater<LoginForm> = (formData) => async (dispatch) => {
  const res = await axios.post<UserFromBackend>('/auth/login', formData);
  if (res.status === 200) {
    dispatch(setUser({ ...res.data, status: 'logged' }));
    return true
  }
};

export const checkUserThunk: ThunkActionCreater = () => (dispatch) => {
  axios
    .get<UserFromBackend>('/auth/check')
    .then(({ data }) => dispatch(setUser({ ...data, status: 'logged' })))
    .catch((err) => {
      console.log(err);
      dispatch(logoutUser());
    });
};

export const logoutThunk: ThunkActionCreater = () => (dispatch) => {
  axios
    .get('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
