'use client';

import { useAppDispatch } from '@/utils/hooks/hooks';
import { useState } from 'react';
import { fetchAiAnswer } from '@/utils/redux/aiSlice';
import InputComponents from '../common/InputComponents';
import { defaultQuestionList } from '@/utils/global';

const AIAskInput = () => {
  const [ask, setAsk] = useState<string>('');
  const [selected, setSelected] = useState<number>(-1);
  const dispatch = useAppDispatch();
  const onClickHandler = async () => {
    if (!ask) return;
    dispatch(fetchAiAnswer(ask));
    setAsk('');
    setSelected(-1);
  };
  return (
    <InputComponents
      value={ask}
      setValue={setAsk}
      selected={selected}
      setSelected={setSelected}
      onClickHandler={onClickHandler}
      text='질문하기'
      list={defaultQuestionList}
    />
  );
};

export default AIAskInput;
