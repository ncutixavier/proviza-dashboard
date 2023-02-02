import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
  rows: number;
  error: any;
}

const PZTextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ label, className, rows, error, ...props }, ref) => {
    return (
      <div>
        <div className={className ?? ``}>
          <label className={`text-sm font-medium`} htmlFor="email">
            {label}
          </label>
          <div className="mt-2">
            <textarea
              ref={ref}
              rows={rows ?? "4"}
              className={`px-3 py-2 rounded-md border ${
                error ? "border-red-500" : "border-slate-400"
              } w-full focus:outline-none focus:shadow-outline`}
              placeholder={props.placeholder ?? "Write your message here..."}
              {...props}
            ></textarea>
          </div>
          {error && (
            <p className="text-red-500 text-xs italic">{error?.message}</p>
          )}
        </div>
      </div>
    );
  }
);

export default PZTextArea;
