import AIAnswer from "@/components/ai/AIAnswer";
import AIAskInput from "@/components/ai/AIAskInput";

const AIpage = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <AIAskInput />
      <AIAnswer />
    </div>
  );
};

export default AIpage;
