import AIAnswer from '@/components/AIAnswer';
import AIAskInput from '@/components/AIAskInput';

const AIpage = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <AIAskInput />
      <AIAnswer />
    </div>
  );
};

export default AIpage;
