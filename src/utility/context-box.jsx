const ContextBox = ({ children }) => {
  return (
    <div className={"flex flex-col h-fit w-full bg-[var(--primary-bg)] p-8 pl-12 gap-4 rounded-2xl border-2 border-[var(--secondary-bg)]"}>
      {children}
    </div>
  )
};

export default ContextBox;