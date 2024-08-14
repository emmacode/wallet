import { DateTimeFormat } from "@/utils/date-format";

interface Transaction {
  amount: number;
  id: string;
  status: "pending" | "successful" | "failed";
  clerkType: "credit" | "debit";
  time: string;
}

export default function TransactionsPage() {
  const data: Transaction[] = [
    {
      amount: 1000.0,
      id: "TRX001",
      status: "successful",
      clerkType: "credit",
      time: "2024-08-07T13:41:56",
    },
    {
      amount: 800.0,
      id: "TRX002",
      status: "pending",
      clerkType: "debit",
      time: "2024-08-06T10:15:30",
    },
    {
      amount: 1200.0,
      id: "TRX003",
      status: "successful",
      clerkType: "credit",
      time: "2024-08-05T09:30:00",
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
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((transaction, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.status === "successful"
                      ? "bg-green-100 text-green-800"
                      : transaction.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.clerkType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {DateTimeFormat(transaction?.time as string)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
