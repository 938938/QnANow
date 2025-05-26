'use client';

import { useAppDispatch } from '@/utils/hooks/hooks';
import { fetchOxAnswer, setOxAsk } from '@/utils/redux/oxSlice';
import { useState } from 'react';
import InputComponents from './common/InputComponents';
import ButtonComponents from './common/ButtonComponents';

const AskInput = () => {
  const [ask, setAsk] = useState<string>('');
  const dispatch = useAppDispatch();
  console.log(ask);
  const onClickHandler = async () => {
    dispatch(setOxAsk(ask));
    dispatch(fetchOxAnswer());
    setAsk('');
  };
  return (
    <div>
      <InputComponents
        value={ask}
        setValue={setAsk}
        onClickHandler={onClickHandler}
      />
      <ButtonComponents text='질문하기' onClickHandler={onClickHandler} />
    </div>
  );
};

export default AskInput;
