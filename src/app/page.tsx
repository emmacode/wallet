"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {FinanceService} from "../../server/finance";


export default function Home() {
    const [availableBalance, setAvailableBalance] = useState<string>("$0.00");
    const [pendingBalance, setPendingBalance] = useState<string>("$0.00");

    useEffect(() => {
        const financeService = new FinanceService();
        async function fetchBalances() {
            try {
                const data = await financeService.fetchBalance();
                // Assuming the data contains balances for available and pending amounts
                setAvailableBalance(`$${data.available_balance}`);
                setPendingBalance(`$${data.pending_balance}`);
            } catch (error) {
                console.error("Error fetching financial data:", error);
                // Handle error (e.g., show a notification or set a default value)
            }
        }

        fetchBalances();
    }, []);
  return (
    <div className="flex flex-col bg-white py-5 justify-center items-center mt-28 border border-[#F0F2F5] rounded-3xl">
      <div className="flex flex-row divide-x-[1px]">
        <div className="flex flex-col px-10 gap-4 items-center">
          <p className="text-sm text-[#8592ad] mb-3">Available USD balance</p>
          <p className="font-bold">{availableBalance}</p>
          <Link href="/fund" className="mt-4 px-5 py-2 bg-[#f0f2f5] rounded">Fund</Link>
        </div>

        <div className="flex flex-col px-10 gap-4 items-center">
          <p className="text-sm text-[#8592ad] mb-3">Pending USD balance</p>
          <p className="font-bold">{pendingBalance}</p>
          <Link href="/withdraw" className="mt-4 px-5 py-2 bg-[#f0f2f5] rounded]">Withdraw</Link>
        </div>
      </div>
    </div>
  );
}
