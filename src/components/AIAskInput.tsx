'use client';

import { useAppDispatch } from '@/utils/hooks/hooks';
import { useState } from 'react';
import InputComponents from './common/InputComponents';
import { fetchAiAnswer, setAiAsk } from '@/utils/redux/aiSlice';

const AIAskInput = () => {
  const [ask, setAsk] = useState<string>('');
  const dispatch = useAppDispatch();
  const onClickHandler = async () => {
    if (!ask) return;
    dispatch(setAiAsk(ask));
    dispatch(fetchAiAnswer(ask));
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

export default AIAskInput;
