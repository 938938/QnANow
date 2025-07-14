import { OXType } from '@/utils/redux/oxSlice';

export const getList = async () => {
  const data = localStorage.getItem('list');
  return data ? JSON.parse(data) : [];
};

export const addList = async (data: OXType[]) => {
  localStorage.setItem('list', JSON.stringify(data));
  return;
};
