import Form from "@/components/form";

export default function WithdrawPage() {
  return (
    <div>
      <form>
        <Form
          title="Send to a bank account"
          subtitle="Enter amount to send"
          labelDescription="Amount to send"
        />
        <button className="bg-[#f0f2f5] mt-4 py-4 rounded outline-none text-[#8592ad]">
          continue
        </button>
      </form>
    </div>
  );
}
