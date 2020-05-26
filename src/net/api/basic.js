import axiosInstance from './axiosInstance';
import BASIC from '../url/basic';

export default function () {
  return axiosInstance.post(
      BASIC.LOGIN
  )
}
