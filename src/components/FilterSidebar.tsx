"use client";

interface FilterGroup {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
}

export default function FilterSidebar({
  groups,
  onReset,
}: {
  groups: FilterGroup[];
  onReset: () => void;
}) {
  const hasActive = groups.some((g) => g.selected.length > 0);

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-navy-dark">Filters</h2>
        {hasActive && (
          <button
            onClick={onReset}
            className="text-xs font-medium text-orange hover:text-orange-dark transition"
          >
            Clear all
          </button>
        )}
      </div>

      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="mb-2 text-sm font-semibold text-navy-dark">
            {group.label}
          </h3>
          <div className="space-y-1.5 max-h-52 overflow-y-auto">
            {group.options.map((option) => {
              const checked = group.selected.includes(option);
              return (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm transition hover:bg-gray-light"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => group.onChange(option)}
                    className="h-4 w-4 rounded border-gray-medium text-orange accent-orange"
                  />
                  <span className={checked ? "font-medium text-navy-dark" : "text-gray-dark"}>
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
