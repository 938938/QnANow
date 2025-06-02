const InputComponents = ({
  value,
  setValue,
  onClickHandler,
  text,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClickHandler: () => void;
  text: string;
}) => {
  return (
    <form
      className='mb-6 flex'
      onSubmit={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      <input
        type='text'
        className='bg-defaultWhite border border-defaultMint text-gray-900 text-sm focus:ring-2 focus:ring-inset focus:ring-defaultMint focus:outline-none block p-2.5 flex-1'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={onClickHandler}
        className='bg-defaultWhite px-4 border border-defaultMint active:shadow-[inset_4px_4px_gray]'
      >
        {text}
      </button>
    </form>
  );
};

export default InputComponents;
