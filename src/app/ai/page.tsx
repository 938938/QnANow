'use client';
import InputComponents from '@/components/common/InputComponents';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/hooks';
import { fetchAiAnswer, setAiAsk } from '@/utils/redux/aiSlice';
// import { GoogleGenAI } from '@google/genai';
import { useState } from 'react';

// const ai = new GoogleGenAI({
//   apiKey: `${process.env.NEXT_PUBLIC_TOKEN}`,
// });

// const askAiHandler = async (question: string) => {
//   const response = await ai.models.generateContent({
//     model: 'gemini-2.0-flash',
//     contents: `다음 질문에 대해 친절하고 간단하게 한 문장으로 대답해줘:\n"${question}"`,
//   });
//   return response.text;
// };

const AIpage = () => {
  const [ask, setAsk] = useState<string>('');
  const dispatch = useAppDispatch();
  const { answer, loading, error } = useAppSelector((state) => state.ai);

  const onClickHandler = async () => {
    if (!ask) return;
    dispatch(setAiAsk(ask));
    dispatch(fetchAiAnswer(ask));
    setAsk('');
  };
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <InputComponents
        value={ask}
        setValue={setAsk}
        onClickHandler={onClickHandler}
        text='질문하기'
      />
      {ask && <p>질문 : {ask}?</p>}
      {answer && <p>답변 : {answer}</p>}
    </div>
  );
};

export default AIpage;
