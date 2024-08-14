export type FetchBalance = {
    pending_balance: number;
    available_balance: number;
};


type Transaction = {
    user: string;
    metadata_: any | null;
    symbol: string;
    amount: number;
    total_amount: number;
    clerk_type: "CREDIT" | "DEBIT";
    reason: string | null;
    created_at: string;
    id: string;
    asset_id: string;
    status: "PENDING" | "SUCCESSFUL" | "FAILED";
    fee: number;
    type: string;
    description: string | null;
    updated_at: string;
};

export type FetchTransactions = Transaction[];


type LedgerEntry = {
    clerk_type: "CREDIT" | "DEBIT";
    transaction_id: string;
    pending_delta: number;
    available_delta: number;
    asset_id: string;
    id: string;
    entry_type: string;
    pending_balance: number;
    available_balance: number;
    created_at: string;
};

export type LedgerEntries = LedgerEntry[];
