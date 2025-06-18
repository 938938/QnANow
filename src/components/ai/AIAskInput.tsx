'use client';

import { useState } from 'react';
import InputComponents from '../common/InputComponents';
import { defaultQuestionList } from '@/utils/global';
import { GoogleGenAI } from '@google/genai';
import { useCreateAsk } from '@/utils/hooks/useCreateAsk';

const AIAskInput = () => {
  const [ask, setAsk] = useState<string>('');
  const [selected, setSelected] = useState<number>(-1);
  const { mutate } = useCreateAsk();
  const ai = new GoogleGenAI({
    apiKey: `${process.env.NEXT_PUBLIC_TOKEN}`,
  });

  const onClickHandler = async () => {
    if (!ask.trim()) return;
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `다음 질문에 대해 친절하고 정성스럽게 한 문장으로 대답해줘:\n"${ask}"`,
    });
    mutate({ ask, answer: `${response.text}` });
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
