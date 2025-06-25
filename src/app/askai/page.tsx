import AIAnswerList from '@/components/askai/AIAnswerList';
import AIAskInput from '@/components/askai/AIAskInput';
import AITooltips from '@/components/askai/AITooltips';
import Title from '@/components/common/Title';

const AIpage = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <Title
        title='Ask AI !'
        sub='간단한 질문을 해보세요, 정성껏 답변해드릴게요!'
        warn={`AI 질문과 답변은 모든 사용자에게 공유됩니다.`}
      />
      <AITooltips />
      <AIAskInput />
      <AIAnswerList />
    </div>
  );
};

export default AIpage;
