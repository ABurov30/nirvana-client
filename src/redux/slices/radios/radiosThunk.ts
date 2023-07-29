import axios from 'axios';
import { RadioType } from '../../../types/radioTypes';
import { AppThunk, ThunkActionCreater } from '../../store';
import { setOneRadio, setRadio } from './radiosSlice';
import FormType from '../../../types/formTypes';

export const getAllRadiosThunk: ThunkActionCreater = () => async (dispatch) => {
  const res = await axios.get<RadioType[]>('/music');
  if (res.status === 200) {
    dispatch(setRadio(res.data));
  }
};

export const getRadioById: ThunkActionCreater<number> = (id) => async (dispatch) => {
  const res = await axios.get<RadioType>(`/music/${id}`);
  if (res.status === 200) {
    dispatch(setOneRadio(res.data));
  }
};

export const searchRadioThunk: ThunkActionCreater<FormType> = (formData) => async (dispatch) => {
  console.log('444444', formData);
  const res = await axios.post<RadioType[]>('/music/search', formData);
  if (res.status === 200) {
    dispatch(setRadio(res.data));
  }
};
