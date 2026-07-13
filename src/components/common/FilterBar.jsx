import { ChevronDown } from "lucide-react";

function FilterSelect({ id, label, value, onChange, options }) {
  return (
    <div className="relative flex-1 min-w-40">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full h-12 pl-4 pr-10
          appearance-none
          rounded-2xl border border-gray-200
          bg-white text-base text-gray-700 font-medium
          shadow-sm
          outline-none
          transition-all duration-200
          focus:border-primary focus:ring-2 focus:ring-primary/20
          hover:border-gray-300 hover:shadow-md
          cursor-pointer
        "
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "All" ? `${label}: All` : opt}
          </option>
        ))}
      </select>
      {/* Custom chevron icon */}
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
        <ChevronDown size={18} />
      </span>
    </div>
  );
}

export default function FilterBar({
  categories,
  statuses,
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <FilterSelect
        id="filter-category"
        label="Category"
        value={selectedCategory}
        onChange={onCategoryChange}
        options={categories}
      />
      <FilterSelect
        id="filter-status"
        label="Status"
        value={selectedStatus}
        onChange={onStatusChange}
        options={statuses}
      />
    </div>
  );
}
