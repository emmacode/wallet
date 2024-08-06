import Input from "@/components/input";

export default function FundPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-5 text-center">
        <h3 className="font-bold text-[#1b1f28] text-2xl">Fund your wallet</h3>
        <h5 className="text-[#7f889d] text-sm">Enter amount to fund</h5>
      </div>

      <form>
        <div className="mt-10 bg-white rounded-xl w-[512px] py-5 px-4">
          <Input labelDescription="Amount to fund" />
          <button className="bg-[#f0f2f5] w-full mt-4 py-4 rounded outline-none text-[#8592ad]">
            continue
          </button>
        </div>
      </form>
    </div>
  );
}
