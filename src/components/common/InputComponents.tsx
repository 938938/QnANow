const InputComponents = ({
  value,
  setValue,
  onClickHandler,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClickHandler: () => void;
}) => {
  return (
    <form
      className='mb-6'
      onSubmit={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      {/* <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        Default input
      </label> */}
      <input
        type='text'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default InputComponents;
