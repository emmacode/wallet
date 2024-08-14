import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {FetchBalance, FetchTransactions, LedgerEntries} from "./finance.type";

export class FinanceService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8000', // Replace with your actual base URL
            timeout: 5000,                         // Set a timeout for requests
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YXkyZHJ1aEBleGFtcGxlLmNvbSIsImV4cCI6MTk3MjM2MzA1ODh9.oWbyw0-A_lEigUX0o84BAk1dsgfrrd5_RfbTIP9Li0s`
            } // Default headers
        });
    }

    async fetchBalance(): Promise<FetchBalance> {
        try {
            const response: AxiosResponse<any> = await this.axiosInstance.get('/wallets/balance');
            return response.data;
        } catch (error) {
            // Handle error appropriately
            console.error('Error fetching balance:', error);
            throw error;
        }
    }

    async fundWallet(amount: number): Promise<void> {
        try {
            await this.axiosInstance.post('/wallets/fund', { amount });
        } catch (error) {
            // Handle error appropriately
            console.error('Error funding wallet:', error);
            throw error;
        }
    }

    async withdrawWallet(amount: number): Promise<void> {
        await this.axiosInstance.post('/wallets/withdraw', { amount });
    }



    async fetchTransactions(): Promise<FetchTransactions> {
        try {
            const response: AxiosResponse<any> = await this.axiosInstance.get('/wallets/transactions');
            return response.data;
        } catch (error) {
            // Handle error appropriately
            console.error('Error fetching balance:', error);
            throw error;
        }
    }

    async fetchLedgerEntries(): Promise<LedgerEntries> {
        try {
            const response: AxiosResponse<any> = await this.axiosInstance.get('/wallets/ledgers');
            return response.data;
        } catch (error) {
            // Handle error appropriately
            console.error('Error fetching balance:', error);
            throw error;
        }
    }

    async failTransaction(transactionId: string): Promise<void> {
        try {
            await this.axiosInstance.post('wallets/transaction/fail', { transaction_id: transactionId });
        } catch (error) {
            // Handle error appropriately
            throw error;
        }
    }

    async confirmTransaction(transactionId: string): Promise<void> {
        try {
            await this.axiosInstance.post('wallets/transaction/confirm', { transaction_id: transactionId });
        } catch (error) {
            // Handle error appropriately
            throw error;
        }
    }
}
