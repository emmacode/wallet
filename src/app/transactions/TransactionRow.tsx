'use client';

import { useState } from "react";
import { FinanceService } from "../../../server/finance";
import {DateTimeFormat} from "@/utils/date-format";

export default function TransactionRow({ transaction, onTransactionUpdated }) {
    const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);

    const handleConfirmTransaction = async (transactionId: string) => {
        await new FinanceService().confirmTransaction(transactionId);
        console.log(`Confirming transaction with ID: ${transactionId}`);
        setSelectedTransactionId(null); // Close the modal/dropdown
        onTransactionUpdated(); // Refresh the transactions in the parent component
    };

    const handleFailTransaction = async (transactionId: string) => {
        await new FinanceService().failTransaction(transactionId);
        console.log(`Failing transaction with ID: ${transactionId}`);
        setSelectedTransactionId(null); // Close the modal/dropdown
        onTransactionUpdated(); // Refresh the transactions in the parent component
    };

    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${transaction.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.status === "SUCCESSFUL"
                                ? "bg-green-100 text-green-800"
                                : transaction.status === "PENDING"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                        }`}
                    >
                      {transaction.status}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.clerk_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.created_at && DateTimeFormat(transaction.created_at)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                    {transaction.status === "PENDING" && (
                        <div className="relative inline-block text-left">
                            <button
                                onClick={() =>
                                    setSelectedTransactionId(
                                        selectedTransactionId === transaction.id
                                            ? null
                                            : transaction.id
                                    )
                                }
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            >
                                &#x2022;&#x2022;&#x2022;
                            </button>
                        </div>
                    )}
                </td>
            </tr>
            {selectedTransactionId === transaction.id && (
                <div className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a
                            onClick={async () => {
                                await handleConfirmTransaction(transaction.id);
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                            Confirm Transaction
                        </a>
                        <a
                            onClick={async () => {
                                await handleFailTransaction(transaction.id);
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                            Fail Transaction
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
