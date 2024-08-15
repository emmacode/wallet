'use client';

import { useEffect, useState } from "react";
import { FinanceService } from "../../../server/finance";
import TransactionRow from "./TransactionRow"; // Import Client Component

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const financeService = new FinanceService();
                const fetchedTransactions = await financeService.fetchTransactions();
                setTransactions(fetchedTransactions);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    const refreshTransactions = async () => {
        setLoading(true);
        const financeService = new FinanceService();
        const fetchedTransactions = await financeService.fetchTransactions();
        setTransactions(fetchedTransactions);
        setLoading(false);
    };

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
                        Amount
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        ID
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Status
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Clerk Type
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Time
                    </th>
                    <th
                        scope="col"
                        className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                    <TransactionRow key={index} transaction={transaction} onTransactionUpdated={refreshTransactions} />
                ))}
                </tbody>
            </table>
        </div>
    );
}
