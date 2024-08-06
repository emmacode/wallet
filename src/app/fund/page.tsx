import Form from "@/components/form";

export default function FundPage() {
  return (
    <div>
      <form>
        <Form
          title="Fund your wallet"
          subtitle="Enter amount to fund"
          labelDescription="Amount to fund"
        />
        <button className="bg-[#f0f2f5] mt-4 py-4 rounded outline-none text-[#8592ad]">
          continue
        </button>
      </form>
    </div>
  );
}
