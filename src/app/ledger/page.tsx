interface LedgerProps {
  clerkType: "debit" | "credit";
  entryType: string;
  transactionId: string;
  pendingBalance: number;
  pendingDelta: number;
  availableBalance: number;
  availableDelta: number;
}

export default function LedgerPage() {
  const data: LedgerProps[] = [
    {
      clerkType: "credit",
      entryType: "credit",
      transactionId: "TRX001",
      pendingBalance: 1000.0,
      pendingDelta: 100.0,
      availableBalance: 900.0,
      availableDelta: 50.0,
    },
    {
      clerkType: "debit",
      entryType: "cebit",
      transactionId: "TRX002",
      pendingBalance: 800.0,
      pendingDelta: -200.0,
      availableBalance: 750.0,
      availableDelta: -150.0,
    },
    {
      clerkType: "credit",
      entryType: "credit",
      transactionId: "TRX003",
      pendingBalance: 1200.0,
      pendingDelta: 400.0,
      availableBalance: 1100.0,
      availableDelta: 350.0,
    },
  ];

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
                {transaction.clerkType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {transaction.entryType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.transactionId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.pendingBalance.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.pendingDelta.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.availableBalance.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.availableDelta.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
