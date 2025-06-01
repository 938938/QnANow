'use client';
import ButtonComponents from '@/components/common/ButtonComponents';
import InputComponents from '@/components/common/InputComponents';
import { GoogleGenAI } from '@google/genai';
import { useState } from 'react';

const ai = new GoogleGenAI({
  apiKey: `${process.env.NEXT_PUBLIC_TOKEN}`,
});

const askAiHandler = async (question: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: `다음 질문에 대해 친절하고 간단하게 한 문장으로 대답해줘:\n"${question}"`,
  });
  return response.text;
};

const AIpage = () => {
  const [ask, setAsk] = useState<string>('');
  const onClickHandler = async () => {
    if (!ask) return;
    const answer = await askAiHandler(ask);
    console.log('AI 응답:', answer);
  };
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <InputComponents
        value={ask}
        setValue={setAsk}
        onClickHandler={onClickHandler}
      />
      <ButtonComponents text='질문하기' onClickHandler={onClickHandler} />
    </div>
  );
};

export default AIpage;
