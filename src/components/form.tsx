interface FormProps {
  title: string;
  subtitle: string;
  labelDescription: string;
}

export default function Form({ title, subtitle, labelDescription }: FormProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-5 text-center">
        <h3 className="font-bold text-[#1b1f28] text-2xl">{title}</h3>
        <h5 className="text-[#7f889d] text-sm">{subtitle}</h5>
      </div>

      <div className="mt-10 bg-white rounded-xl w-[512px] py-5 px-4">
        <form>
          <div className="flex flex-col">
            <label
              htmlFor={labelDescription}
              className="text-sm font-light mb-1"
            >
              {labelDescription}
            </label>
            <input type="text" placeholder="$0.00" className="border outline-none border-[#F0F2F5] p-4" />
            <button className="bg-[#f0f2f5] mt-4 py-4 rounded outline-none text-[#8592ad]">
              continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
