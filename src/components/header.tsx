import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4 mb-28 flex justify-between items-center border border-[#F0F2F5]">
      <Link href="/" className="text-slate-950">Home</Link>
      <div className="flex py-5 gap-3 justify-end">
        <Link href="/transactions" className="text-slate-950">
          Transactions
        </Link>
        <Link href="/ledger" className="text-slate-950">
          Ledger
        </Link>
      </div>
    </div>
  );
}
