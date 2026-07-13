const VARIANT_CLASSES = {
  // ── Semantic ────────────────────────────────────────────────
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100   text-amber-700",
  error:   "bg-red-100     text-red-700",

  // ── Event-domain ────────────────────────────────────────────
  category: "bg-blue-100   text-blue-700",
  status:   "bg-primary/10 text-primary",

  // ── Neutrals ────────────────────────────────────────────────
  default: "bg-gray-100 text-gray-700",
  muted:   "bg-gray-50  text-gray-400",
};

const DOT_CLASSES = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error:   "bg-red-500",
  category: "bg-blue-500",
  status:   "bg-primary",
  default: "bg-gray-400",
  muted:   "bg-gray-300",
};

const SIZE_CLASSES = {
  sm: "px-2    py-px   text-[11px]",
  md: "px-2.5  py-0.5  text-xs",
};

export default function Badge({
  label,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
  // ── escape-hatch: accept raw colorClass for full backward-compat ──
  colorClass,
}) {
  const colorStyles = colorClass ?? VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.default;
  const sizeStyles  = SIZE_CLASSES[size]  ?? SIZE_CLASSES.md;
  const dotColor    = DOT_CLASSES[variant] ?? "bg-gray-400";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5",
        "rounded-full font-semibold",
        "whitespace-nowrap",
        colorStyles,
        sizeStyles,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {dot && (
        <span
          className={`block w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  );
}
