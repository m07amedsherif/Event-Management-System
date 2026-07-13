
const SIZE_CLASSES = {
  sm:   "max-w-screen-sm",
  md:   "max-w-screen-md",
  lg:   "max-w-screen-lg",
  xl:   "max-w-screen-xl",
  full: "max-w-none",
};

export default function Container({
  children,
  size = "xl",
  as: Tag = "div",
  className = "",
}) {
  const sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES.xl;

  return (
    <Tag
      className={[
        "w-full mx-auto",
        "px-4 sm:px-6 lg:px-8",
        sizeClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
