import {FinanceService} from "../../../server/finance";

interface LedgerProps {
  clerkType: "debit" | "credit";
  entryType: string;
  transactionId: string;
  pendingBalance: number;
  pendingDelta: number;
  availableBalance: number;
  availableDelta: number;
}

export default async function LedgerPage() {
  const data = await new FinanceService().fetchLedgerEntries();

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
                {transaction.id}
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
