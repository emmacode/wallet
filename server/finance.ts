import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class FinanceService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8000', // Replace with your actual base URL
            timeout: 5000,                         // Set a timeout for requests
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YXkyZHJ1aEBnbWFpbC5jb20iLCJleHAiOjE3MjM0NjA0NTl9.oPuhWJwEQfr9jCCBszLNh2jywiKtVj1W7KhNMy26T6g`
            } // Default headers
        });
    }

    async fetchBalance() {
        try {
            const response: AxiosResponse<any> = await this.axiosInstance.get('/wallets/balance');
            return response.data;
        } catch (error) {
            // Handle error appropriately
            console.error('Error fetching balance:', error);
            throw error;
        }
    }

    async fundWallet(amount: number) {
        try {
            const response: AxiosResponse<any> = await this.axiosInstance.post('/wallets/fund', { amount });
            return response.data;
        } catch (error) {
            // Handle error appropriately
            console.error('Error fetching balance:', error);
            throw error;
        }
    }
    // Add more methods as needed for other API calls
}
