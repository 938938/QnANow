import OXAnswer from '@/components/ox/OXAnswer';
import OXAskInput from '@/components/ox/OXAskInput';
import QuestionList from '@/components/QuestionList';

export default function Home() {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <OXAskInput />
      <OXAnswer />
      <QuestionList />
    </div>
  );
}
