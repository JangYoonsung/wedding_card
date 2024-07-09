const Label = ({ text, isRequired }: { text: string; isRequired: boolean }) => {
  return (
    <div className="flex gap-2 pb-2">
      <label htmlFor="">{text}</label>
      {isRequired && <span className="bg-red-600 text-white rounded p-1 text-xs">required</span>}
    </div>
  );
};

export default Label;