

const SIZE_CLASSES = {
  sm: { wrapper: "py-12 gap-3", iconBox: "w-12 h-12 rounded-xl", title: "text-base", desc: "text-xs mt-0.5" },
  md: { wrapper: "py-24 gap-4", iconBox: "w-16 h-16 rounded-2xl", title: "text-lg",  desc: "text-sm mt-1"   },
  lg: { wrapper: "py-32 gap-5", iconBox: "w-20 h-20 rounded-2xl", title: "text-xl",  desc: "text-sm mt-1.5" },
};

export default function EmptyState({
  icon,
  title,
  description,
  action,
  size = "md",
  className = "",
}) {
  const s = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

  return (
    <div
      className={[
        "flex flex-col items-center justify-center text-center",
        s.wrapper,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="status"
      aria-live="polite"
    >
      {/* Icon slot */}
      {icon && (
        <div
          className={[
            "flex items-center justify-center shrink-0",
            "bg-gray-100 text-gray-400",
            s.iconBox,
          ].join(" ")}
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      {/* Text block */}
      <div className="flex flex-col items-center">
        <p className={`font-bold text-gray-800 ${s.title}`}>{title}</p>
        {description && (
          <p className={`text-gray-400 ${s.desc}`}>{description}</p>
        )}
      </div>

      {/* Action slot */}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
