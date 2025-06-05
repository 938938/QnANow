const Title = ({ title, sub }: { title: string; sub: string }) => {
  return (
    <div>
      <h1 className='my-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl'>
        {title}
      </h1>
      <p className='mb-4'>&#62; {sub}</p>
    </div>
  );
};

export default Title;
