import React, { useRef, useState } from "react";

type Props = {
  length: number;
  onChange: (otp: string) => void;
  error?: string;
}

const InputOtc: React.FC<Props> = ({ length, onChange, error }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);


  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Ensure only one character
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Automatically move to the next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };


  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus(); // Move to the previous input
    }
  
    if (event.key === "Enter" && index === otp.length - 1) {
      // Trigger submit when Enter is pressed on the last field
      const completeOtp = otp.join("");
      if (completeOtp.length === length) {
        onChange(completeOtp);
      }
    }
  };


  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("Text").slice(0, length);
    const newOtp = pasteData.split("");
    for (let i = 0; i < length; i++) {
      newOtp[i] = newOtp[i] || otp[i];
    }
    setOtp(newOtp);
    onChange(newOtp.join(""));
  };


  const hasError = !!error;


  return (
    <div className="flex flex-row justify-center items-center gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          maxLength={1}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          className={`
            relative flex flex-row
            w-20 h-20
            justify-between items-center
            bg-neutral-900
            rounded-md
            text-center text-xl
            transition-colors duration-200
            focus:outline-none focus:ring
            ${hasError ? 'border-red-500 focus:ring-red-500 text-red-500'
                : 'border-neutral-800 focus:ring-neutral-500 text-white'
            }
          `}
        />
      ))}
    </div>
  );
};

export default InputOtc;