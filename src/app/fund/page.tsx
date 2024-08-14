"use client";

import Input from "@/components/input";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for the router
import { FinanceService } from "../../../server/finance";
import {ToastContainer} from "react-toastify";

export default function FundPage() {
    const [amount, setAmount] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    const handleContinueClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setIsLoading(true);

        try {
            const financeService = new FinanceService();
            await financeService.fundWallet(Number(amount));

            console.log("Fund successful");
            // Redirect to another page after success
            router.push("/");
        } catch (error) {
            console.error("Error funding wallet:", error);
            // Handle error (e.g., show an error message)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="mb-5 text-center">
                    <h3 className="font-bold text-[#1b1f28] text-2xl">Fund your wallet</h3>
                    <h5 className="text-[#7f889d] text-sm">Enter amount to fund</h5>
                </div>

                <form>
                    <div className="mt-10 bg-white rounded-xl w-[512px] py-5 px-4">
                        <Input
                            labelDescription="Amount to fund"
                            onChange={handleInputChange}
                            value={amount}
                        />
                        <button
                            className={`bg-red-100 ${isLoading ? "disabled:bg-gray-300" : "disabled:bg-[#f0f2f5]"} w-full mt-4 py-4 rounded outline-none text-[#8592ad]`}
                            onClick={handleContinueClick}
                            disabled={!amount.trim() || isLoading} // Disable button if the amount is empty or loading
                        >
                            {isLoading ? "Processing..." : "Continue"}
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" autoClose={5000} />
        </>
    );
}
