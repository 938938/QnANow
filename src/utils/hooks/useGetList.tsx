import { useEffect } from 'react';
import { setList } from '../redux/oxSlice';
import { useAppDispatch } from './useRedux';

const getList = () => {
  try {
    const storedList = localStorage.getItem('list');
    return storedList ? JSON.parse(storedList) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const useGetList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    dispatch(setList(getList()));
  }, []);
};

export default useGetList;
