import Answer from '@/components/Answer';
import AskInput from '@/components/AskInput';
import QuestionList from '@/components/QuestionList';

export default function Home() {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <AskInput />
      <Answer />
      <QuestionList />
    </div>
  );
}
