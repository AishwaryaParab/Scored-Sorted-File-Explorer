import { ChevronDown, ChevronUp } from "lucide-react";
import type { SortOrder } from "../lib/types";
import { useState } from "react";

interface SortDropdownProps {
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

const SortDropdown = ({ sortOrder, onSortChange }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSortSelect = (order: SortOrder) => {
    onSortChange(order);
    setIsOpen(false);
  };

  const label =
    sortOrder === "ASC"
      ? "Ascending"
      : sortOrder === "DESC"
      ? "Descending"
      : "Original";
  return (
    <div className="relative mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
      >
        Sort: {label}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <button
            onClick={() => handleSortSelect("NONE")}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${
              sortOrder === "NONE"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700"
            }`}
          >
            Original Order
          </button>
          <button
            onClick={() => handleSortSelect("ASC")}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${
              sortOrder === "ASC" ? "bg-blue-50 text-blue-700" : "text-gray-700"
            }`}
          >
            Ascending (A-Z)
          </button>
          <button
            onClick={() => handleSortSelect("DESC")}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${
              sortOrder === "DESC"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700"
            }`}
          >
            Descending (Z-A)
          </button>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
