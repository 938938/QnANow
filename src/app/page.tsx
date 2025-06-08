import Title from '@/components/common/Title';
import OXAnswer from '@/components/ox/OXAnswer';
import OXAskInput from '@/components/ox/OXAskInput';

export default function Home() {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <Title
        title='OX 질문하기!'
        sub='예/아니오로 답변할 수 있는 질문을 해주세요.'
      />
      <OXAskInput />
      <OXAnswer />
    </div>
  );
}
