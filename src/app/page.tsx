import Answer from '@/components/Answer';
import AskInput from '@/components/AskInput';
import QuestionList from '@/components/QuestionList';

export default function Home() {
  return (
    <div>
      <AskInput />
      <Answer />
      <QuestionList />
    </div>
  );
}
