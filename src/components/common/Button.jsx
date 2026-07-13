const VARIANT_CLASSES = {
  primary:
    "bg-primary text-white border border-primary " +
    "hover:bg-primary/90 active:scale-[0.97] shadow-sm",
  outline:
    "bg-transparent text-primary border border-primary " +
    "hover:bg-primary/8 active:scale-[0.97]",
  ghost:
    "bg-transparent text-primary border border-transparent " +
    "hover:bg-primary/10 active:scale-[0.97]",
  danger:
    "bg-error text-white border border-error " +
    "hover:bg-error/90 active:scale-[0.97] shadow-sm",
};

const SIZE_CLASSES = {
  sm: "h-8 px-3 text-xs rounded-lg gap-1.5",
  md: "h-10 px-4 text-sm rounded-xl gap-2",
  lg: "h-12 px-6 text-base rounded-xl gap-2.5",
};

const DISABLED_CLASSES =
  "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  id,
  ariaLabel,
  onClick,
  className = "",
  ...rest
}) {
  const variantClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        "font-semibold",
        "transition-all duration-200",
        "select-none whitespace-nowrap",
        variantClass,
        sizeClass,
        DISABLED_CLASSES,
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
