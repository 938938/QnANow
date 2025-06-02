'use client';

import { useAppDispatch } from '@/utils/hooks/hooks';
import { fetchOxAnswer, setOxAsk } from '@/utils/redux/oxSlice';
import { useState } from 'react';
import InputComponents from './common/InputComponents';

const OXAskInput = () => {
  const [ask, setAsk] = useState<string>('');
  const dispatch = useAppDispatch();
  const onClickHandler = async () => {
    if (!ask) return;
    dispatch(setOxAsk(ask));
    dispatch(fetchOxAnswer());
    setAsk('');
  };
  return (
    <InputComponents
      value={ask}
      setValue={setAsk}
      onClickHandler={onClickHandler}
      text='질문하기'
    />
  );
};

export default OXAskInput;
