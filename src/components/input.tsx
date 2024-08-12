interface InputProps {
    labelDescription: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Added onChange prop
    value: string; // Added value prop to control the input value
}

export default function Input({ labelDescription, onChange, value }: InputProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={labelDescription} className="text-sm font-light mb-1">
                {labelDescription}
            </label>
            <input
                type="text"
                id={labelDescription}
                placeholder="$0.00"
                className="border w-full outline-none border-[#F0F2F5] p-4"
                onChange={onChange} // Pass the onChange handler
                value={value} // Controlled input
            />
        </div>
    );
}
