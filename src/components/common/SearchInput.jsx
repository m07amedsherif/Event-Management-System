import { Search, X } from "lucide-react";

export default function SearchInput({ value, onChange, placeholder = "Search events…" }) {
  return (
    <div className="relative w-full group">
      {/* Icon left */}
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-primary transition-colors">
        <Search size={20} />
      </span>

      <label htmlFor="events-search" className="sr-only">Search events</label>

      <input
        id="events-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full h-12 pl-12 pr-10
          rounded-2xl border border-gray-200
          bg-white text-base text-gray-800
          placeholder-gray-400
          shadow-sm
          outline-none
          transition-all duration-200
          focus:border-primary focus:ring-2 focus:ring-primary/20
          hover:border-gray-300 hover:shadow-md
        "
        aria-label="Search events"
      />

      {/* Clear button */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
