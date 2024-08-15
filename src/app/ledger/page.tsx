'use client';

import { useEffect, useState } from "react";
import { FinanceService } from "../../../server/finance";
import {LedgerEntries} from "../../../server/finance.type";


export default function LedgerPage() {
    const [data, setData] = useState<LedgerEntries>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLedgerEntries = async () => {
            try {
                const financeService = new FinanceService();
                const ledgerEntries = await financeService.fetchLedgerEntries();
                setData(ledgerEntries);
            } catch (error) {
                console.error("Error fetching ledger entries:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLedgerEntries();
    }, []); // Empty dependency array ensures this runs on component mount

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Clerk type
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Entry type
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Transaction ID
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Pending balance
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Pending delta
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Available balance
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Available delta
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.map((transaction, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.clerk_type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {transaction.entry_type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.transaction_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.pending_balance.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {transaction.pending_delta.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.available_balance.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {transaction.available_delta.toFixed(2)}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
