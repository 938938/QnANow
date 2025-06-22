import AIAnswerList from '@/components/ai/AIAnswerList';
import AIAskInput from '@/components/ai/AIAskInput';
import AITooltips from '@/components/ai/AITooltips';
import Title from '@/components/common/Title';

const AIpage = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <Title
        title='AI에게 질문하기!'
        sub='간단한 질문을 해보세요, 정성껏 답변해드릴게요!'
      />
      <AITooltips />
      <AIAskInput />
      <AIAnswerList />
    </div>
  );
};

export default AIpage;
