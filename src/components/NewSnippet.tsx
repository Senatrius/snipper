export const NewSnippet = () => {
  return (
      <button
        className='group relative flex flex-col items-start rounded-[0.25rem] border border-border bg-component px-3 pb-5 text-left hover:border-text focus:border-text'>
        <span
          className='text-white inline-block -translate-y-1/2 rounded-sm border border-border bg-bg py-1.5 px-4 text-small font-medium uppercase tracking-wider group-hover:border-text group-focus:border-text'>
          new snippet
        </span>
      </button>
  );
};
