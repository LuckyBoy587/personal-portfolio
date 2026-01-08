const ContextBox = ({ children }) => {
  return (
    <div className={"flex flex-col h-fit w-full p-8 pl-12 gap-4 rounded-2xl glass-card animate-glow-emergence"}>
      {children}
    </div>
  )
};

export default ContextBox;