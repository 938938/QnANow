const AIAnswer = ({
  ask,
  answer,
  date,
}: {
  ask: string;
  answer: string;
  date: string;
}) => {
  return (
    <div className='flex flex-col my-4 w-full items-center gap-2'>
      {date && (
        <div className='w-full flex justify-center items-center gap-2 px-4'>
          <div className='flex-grow border-t border-dashed border-gray-300' />
          <span className='text-gray-500 whitespace-nowrap'>{date}</span>
          <div className='flex-grow border-t border-dashed border-gray-300' />
        </div>
      )}
      {ask && (
        <div className='flex w-full justify-start relative'>
          <div className='bg-defaultLightblue p-4 shadow max-w-md'>
            <p>{ask}</p>
          </div>
        </div>
      )}
      {answer && (
        <div className='flex w-full justify-end'>
          <div className='bg-defaultCreamGray p-4 shadow max-w-md'>
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnswer;
