interface InputProps {
  labelDescription: string;
}

export default function Input({ labelDescription }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={labelDescription} className="text-sm font-light mb-1">
        {labelDescription}
      </label>
      <input
        type="text"
        placeholder="$0.00"
        className="border w-full outline-none border-[#F0F2F5] p-4"
      />
    </div>
  );
}
