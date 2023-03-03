export const Button = ({ text, ...rest }: { text: string }) => {
  return (
    <button
      className='rounded-[0.25rem] bg-border py-3 px-6 text-white'
      type='submit'
      {...rest}>
      {text}
    </button>
  );
};
