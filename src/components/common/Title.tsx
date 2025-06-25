const Title = ({
  title,
  sub,
  warn,
}: {
  title: string;
  sub: string;
  warn?: string;
}) => {
  return (
    <div>
      <h1 className='my-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl'>
        {title}
      </h1>
      <div className='mb-4'>
        <p>&#62; {sub}</p>
        {warn && <p className='text-defaultRadicalred'>{warn}</p>}
      </div>
    </div>
  );
};

export default Title;
