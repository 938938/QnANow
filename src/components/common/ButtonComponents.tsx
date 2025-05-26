const ButtonComponents = ({
  text,
  onClickHandler,
}: {
  text: string;
  onClickHandler: () => void;
}) => {
  return (
    <button
      onClick={onClickHandler}
      className='text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
    >
      {text}
    </button>
  );
};

export default ButtonComponents;
