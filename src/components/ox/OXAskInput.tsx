'use client';

import { useAppDispatch } from '@/utils/hooks/useRedux';
import { fetchOxAnswer } from '@/utils/redux/oxSlice';
import { useState } from 'react';
import InputComponents from '../common/InputComponents';
import { defaultQuestionList } from '@/utils/global';

const OXAskInput = () => {
  const [ask, setAsk] = useState<string>('');
  const [selected, setSelected] = useState<number>(-1);
  const dispatch = useAppDispatch();
  const onClickHandler = async () => {
    if (!ask) return;
    dispatch(fetchOxAnswer(ask));
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

export default OXAskInput;
