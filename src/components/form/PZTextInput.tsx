import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  error?: any;
}

const PZTextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <div>
        <div className={className ?? ``}>
          <label className={`text-sm font-medium`} htmlFor="email">
            {label}
          </label>
          <div className="mt-2">
            <input
              ref={ref}
              className={`px-3 py-2 rounded-md border ${
                error ? "border-red-500" : "border-slate-400"
              } w-full focus:outline-none focus:shadow-outline`}
              placeholder={props.placeholder ?? "Write your message here..."}
              {...props}
            ></input>
          </div>
          {error && (
            <p className="text-red-500 text-xs italic">{error?.message}</p>
          )}
        </div>
      </div>
    );
  }
);

export default PZTextInput;
