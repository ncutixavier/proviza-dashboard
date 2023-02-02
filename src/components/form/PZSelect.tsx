import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  selected?: string;
  error: any;
  items: { label: string; value: string }[];
}

const PZSelect = forwardRef<HTMLSelectElement, InputProps>(
  ({ label, className, selected, error, ...props }, ref) => {
    return (
      <div className={className}>
        <div className={`space-y-1 h-[95px] relative`}>
          <label htmlFor="small" className={`text-sm font-medium`}>
            {label}
          </label>
          <select
            ref={ref}
            id="small"
            className={`px-3 py-2 rounded-md border ${
              error ? "border-red-500" : "border-slate-400"
            } w-full focus:outline-none focus:shadow-outline`}
            {...props}
            defaultValue={""}
          >
            <option value="" disabled>
              {selected}
            </option>
            {props.items.map((item, index) => (
              <option key={index} value={item?.value}>
                {item?.label}
              </option>
            ))}
          </select>
          {error && (
            <p className="text-red-500 text-xs italic">{error?.message}</p>
          )}
        </div>
      </div>
    );
  }
);

export default PZSelect;
